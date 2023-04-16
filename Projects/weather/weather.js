// My api key: 966d1e2e60e34760086ff48fadde4348
// class link: https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=9361bd03ec7175e9eea92fdf7a717518

// variables

let button = document.querySelector('#button');
let currentTemp = document.querySelector('.currentTemp');
let degSym = '\u00B0';
let cityInput = document.querySelector('#text');
let weatherStatus = document.querySelector('.weatherStatus');
let highTemp = document.querySelector('.high');
let lowTemp = document.querySelector('.low');
let humidityPercent = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind');
let feelsLike = document.querySelector('.feelsLike');
let smallPic = document.querySelector('.smallPic');



button.addEventListener('click', (e)=>{

    // resetting values

    currentTemp.innerText = "Current Temperature:";

    feelsLike.innerText = "Feels Like:";

    weatherStatus.innerText = "Weather Status:";

    highTemp.innerText = "High:";

    lowTemp.innerText = "Low:";

    humidityPercent.innerText = "Humidity:"

    windSpeed.innerText = "Wind Speed:";

    smallPic.setAttribute('src', 'images/smallSunny.jpg');

    let userCity = cityInput.value;

    // kelvin to farenheit function

    let kToF = (kelv)=>{
        let updatedTemp = (Number(kelv) - 273.15)*(9/5)+32;
        updatedTemp = String(Math.floor(updatedTemp))
        return (` ${updatedTemp}${degSym}F`);
    }

    // kph to mph function

    let kphTomph = (kph) => {
        let updatedSpeed = (Number(kph)/1.609344);
        updatedSpeed = String(Math.floor(updatedSpeed));
        return (` ${updatedSpeed} mph`)
    }

    // Capitalize words in description function

    let cap = (string) => {

        let arr = string.split("");

        for(let i = 0; i < arr.length -1; i++){
            if (i === 0){
                arr[0] = arr[0].toUpperCase();
            } else if (arr[i] === " "){
                arr[i+1] = arr[i+1].toUpperCase();
            }
        }
        let newString = arr.join("");
        return newString;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=9361bd03ec7175e9eea92fdf7a717518`
    
    fetch(url)
    .then(results=>results.json())
    .then(data=>{

        let currT = kToF(data.main.temp);
        currentTemp.innerText += currT;

        let feels = kToF(data.main.feels_like);
        feelsLike.innerText += feels;

        let dataStatus = data.weather[0].description;
        let capitalized = cap(dataStatus);
        weatherStatus.innerText += ` ${capitalized}`;

        let container = document.getElementById('container');


        // function to choose weather status pic

        let choosePic = (data) => {

            return data.weather[0].main === "Clouds" ? smallPic.setAttribute('src', 'images/cloudy.jpg')
            : data.weather[0].main === "Rain" ? smallPic.setAttribute('src', 'images/rain.png')
            : smallPic.setAttribute('src', 'images/smallSunny.jpg')

        }
        choosePic(data);

        // choosing background image

        if(smallPic.getAttribute('src') === "images/cloudy.jpg"){
            container.style.backgroundImage = 'url("images/bigCloud.jpg")';
        }
        else if(smallPic.getAttribute('src') === "images/rain.png"){
            container.style.backgroundImage = 'url(images/bigRain.jpg)';
        } else {
            container.style.backgroundImage = 'url(images/sunny.jpg)';
        }

        let highT = kToF(data.main.temp_max);
        highTemp.innerText += highT;

        let lowT = kToF(data.main.temp_min);
        lowTemp.innerText += lowT;

        let convertedHumidity = kphTomph(data.wind.speed);
        windSpeed.innerText += convertedHumidity;

        let humid = ` ${data.main.humidity}%`;
        humidityPercent.innerText += humid;

        
        console.log(data);
        console.log(data.main.temp);
        console.log();
        console.log(capitalized);
    })
})

