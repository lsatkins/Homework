// let url = `https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=50`;

let popUp = document.querySelector('.popUp');
let nameList = document.querySelector('.nameList');
let searchBar = document.querySelector('.searchBar');
let possibleNames = document.querySelector('.possibleNames');
let textBox = document.querySelector('#textBox');

// event listener for search bar

    searchBar.addEventListener('keyup', (e)=>{

        // getting list of nameBox elements

        let names = document.getElementsByClassName('nameBox');
        possibleNames.style.height = "100px";

        for(let i = 0; i <= e.target.value.length -1; i++){
            console.log(e.target.value.length);
            possibleNames.innerText = "";

            for(let j = 0; j < names.length; j++){
                let currName = names[j].innerText;
                
                let part = currName.slice(0, i+1).toLowerCase()

                if(part === e.target.value.toLowerCase()){
                    
                    let possName = document.createElement('div');
                    possName.innerText = currName;
                    possibleNames.append(possName);
                    possName.addEventListener('click',(e)=>{

                        let clickedName = document.getElementById(e.target.innerText);

                        clickedName.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    })
                }else{
                    continue;
                }
            }
        }


       // if()
    })

// function to get second API after event

const getHouseInfo = (houseElement)=>{
   
        houseElement.addEventListener('click', (e) => {

        //resetting popUp styling
        popUp.innerHTML = "";
        popUp.style.padding = "0px";
        popUp.style.border = "none";

        //resetting searchBar after clicking a house
        possibleNames.innerText = "";
        possibleNames.style.height = "0px";
        textBox.value = "";

        fetch(houseElement.id)
        .then(results => results.json())
        .then(data => {
            let houseName = document.createElement('div');
            houseName.setAttribute('class', 'houseName');
            houseName.innerText += data.name;
            popUp.append(houseName);
            popUp.style.padding = "10px";
            popUp.style.border = "solid black";

            //creating element to contain specific house details
            let details = document.createElement('div');
            details.setAttribute('class', 'details');
            popUp.append(details);

            //creating and adding text to child elements of details
            let region = document.createElement('div');
            region.setAttribute('class', 'detailChild');
            region.innerText ="Region: " + data.region;
            details.append(region);

            if(data.words !== ""){
                let words = document.createElement('div');
                words.setAttribute('class', 'detailChild');
                words.innerText = "Words: " + '"' + data.words + '"';
                details.append(words);
            }

            if(data.founded !== ""){
                let founded = document.createElement('div');
                founded.setAttribute('class', 'detailChild');
                founded.innerText = "Founded: " + data.founded;
                details.append(founded);
            }

        })

    })
}
    

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

            if(results[i].name !== ""){
                let charBox = document.createElement('div');
                let nameBox = document.createElement('div');
                nameBox.setAttribute('class', 'nameBox');
                nameBox.innerText = results[i].name;
                charBox.setAttribute('class', 'charBox');
                charBox.setAttribute('id', results[i].name);
                
                
                
                nameList.append(charBox);
                charBox.append(nameBox);
                let allegiancesBox = document.createElement('div');
                allegiancesBox.setAttribute('id', results[i].allegiances);
                allegiancesBox.setAttribute('class', 'allegiancesBox');
                charBox.append(allegiancesBox);

                let allegianceLength = results[i].allegiances.length;
                console.log(allegianceLength);

                if(allegianceLength > 0 && results[i].name !== ""){
                    for(let j= 0; j < results[i].allegiances.length; j++){
                        fetch(results[i].allegiances[j])
                        .then(houseResults => houseResults.json())
                        .then(houseData => {
                            let oneAllegiance = document.createElement('div');
                            oneAllegiance.setAttribute('class', "oneAllegiance")
                            oneAllegiance.setAttribute('id',results[i].allegiances[j]);
                            oneAllegiance.innerText += houseData.name;
                            allegiancesBox.append(oneAllegiance);
                            getHouseInfo(oneAllegiance);
                        })
                    }
                }
            }
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

