// My key 39a6585b
// Full url: "http://www.omdbapi.com/?s=batman&apikey=39a6585b"
// Second url: "http://www.omdbapi.com/?i=tt0372784&apikey=39a6585b"

let container = document.querySelector('.container-fluid');
let smallLinks = document.querySelector('.smallLinks');
let bigPicture = document.querySelector('.bigPicture');
let titlePic = document.querySelector('.titlePic');
let details = document.querySelector('.details');
let title = document.createElement('div');
let bigPic = document.createElement('img');
let year = document.createElement('div');
let rated = document.createElement('div');
let released = document.createElement('div');
let director = document.createElement('div');
let movieIDs = [];



let allData = fetch("http://www.omdbapi.com/?s=batman&apikey=39a6585b");

const getInfo = async () => {

    try{

        let result = await allData;

        let data = await result.json();

        let arrOfMovies = data.Search;

        for(let i = 0; i < arrOfMovies.length; i++){

            let currMov = arrOfMovies[i] 

            //creating arr of IDs

            let title = currMov.Title;
            let ID = currMov.imdbID;
            let movObj = 
            { 
                name: title,
                ID: ID
            };
            
            movieIDs.push(movObj)
            console.log(movieIDs);

            //creating DOM elements for the movies

            let movieCon = document.createElement('div');
            movieCon.setAttribute('class', 'movieCon');
            smallLinks.append(movieCon);

            let pic = document.createElement('img');
            pic.setAttribute('src', currMov.Poster);
            pic.setAttribute('height', '100px');
            pic.setAttribute('width', '100px');
            movieCon.append(pic);

            let link = document.createElement('a');
            link.setAttribute('class', 'link');
            link.setAttribute('href', '#bigPicture');
            link.setAttribute('id', currMov.imdbID);
            link.innerText = currMov.Title;
            movieCon.append(link);

        }
        

        // let detailedData = fetch("http://www.omdbapi.com/?i=tt0372784&apikey=39a6585b")
    }
    catch(err){
        console.log(err);
    }
}

getInfo();

smallLinks.addEventListener('click', (e)=>{

    e.preventDefault();

    let updatedUrl = `http://www.omdbapi.com/?i=${e.target.id}&apikey=39a6585b`;

    let url = fetch(updatedUrl);

    const getDetails = async () =>{
    
        try{

            let result = await url;

            let data = await result.json();

            console.log(data);

            
            title.setAttribute('class','title');
            title.innerText = data.Title;
            titlePic.append(title);


            //clearing the image source before setting a new one
            bigPic.setAttribute('src', "");
            bigPic.setAttribute('src', data.Poster);
            bigPic.setAttribute('height', '600px');
            bigPic.setAttribute('width', '450px');
            titlePic.append(bigPic);

            year.innerText = `Year: ${data.Year}`;
            rated.innerText = `Rated: ${data.Rated}`;
            released.innerText = `Released: ${data.Released}`;
            director.innerText = `Director: ${data.Director}`;
            details.append(year, rated, released, director);

        }
        catch(err){
            console.log(err);
        }
    }

    getDetails();

})




