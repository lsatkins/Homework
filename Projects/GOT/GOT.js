// let url = `https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=50`;

//Character class creation

class Character {
    constructor(name){
        this.name = name;
        this.houses = [];
    }
    addHouse(house){
        this.houses.push(house);
    }
}
let characters = [];

let coverPage = document.querySelector('.coverPage');
let nameList = document.querySelector('.nameList')

// Code to get info from API

const limitPerPage=50;
const apiUrl="https://www.anapioficeandfire.com/api/characters";

const getUsers = async function(pageNo = 1) {

let actualUrl=apiUrl + `?page=${pageNo}&pageSize=${limitPerPage}`;
var apiResults=await fetch(actualUrl)
.then(resp=>{
return resp.json();
});

return apiResults;

}

const getEntireUserList = async function(pageNo = 1) {
  const results = await getUsers(pageNo);
  console.log("Retreiving data from API for page : " + pageNo);
  if (results.length>0) {
        
        for(let i = 0; i < results.length; i++){

            //creating elements and adding names

            let charBox = document.createElement('div');
            let nameBox = document.createElement('div');
            charBox.setAttribute('class', 'charBox');
            nameBox.innerText = results[i].name;
            nameList.append(charBox);
            charBox.append(nameBox);
            let allegiancesBox = document.createElement('div');
            allegiancesBox.setAttribute('id', results[i].allegiances)
            nameList.append(allegiancesBox);

            let allegianceLength = results[i].allegiances.length;
            console.log(allegianceLength);

            if(allegianceLength > 0 && results[i].name !== ""){
                for(let j= 0; j < results[i].allegiances.length; j++){
                    fetch(results[i].allegiances[j])
                    .then(houseResults => houseResults.json())
                    .then(houseData => {
                        let oneAllegiance = document.createElement('div');
                        oneAllegiance.innerText += houseData.name;
                        allegiancesBox.append(oneAllegiance);

                        allegiancesBox.addEventListener('click', (e) =>{
                            console.log("hello");
                        })
                    })
                }
            }

            

            // nameList.addEventListener('click', (e) => {

            //     let house
            // })
        }
    return results.concat(await getEntireUserList(pageNo+1));
  } else {
    return results;
  }
};

let getList = async() =>{
    const entireList=await getEntireUserList();
    console.log(entireList);
}
getList();
