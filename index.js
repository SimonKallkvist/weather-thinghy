//https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=e99cd3f101bbfc2a35e43d850f288eab&units=metric


const apiKey = "e99cd3f101bbfc2a35e43d850f288eab";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

const weatherIcon = document.querySelector('.weather-icon');
let weatherDesc = document.querySelector('.weatherDesc');

const gradientCard = document.querySelector('.card');

console.log(weatherDesc);

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        document.querySelector('.err').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else {

        

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
        weatherDesc.innerText = data.weather[0].description;
    
        // console.log(data.weather[0].description);
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/clouds.png';
           
        }else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'images/clear.png';
            gradientCard.style.background = 'linear-gradient(45deg, rgba(255,42,0,1) 0%, rgba(255,226,0,1) 100%)'
        }else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'images/drizzle.png';
            gradientCard.style.background = 'linear-gradient(45deg, rgba(115,203,177,1) 0%, rgba(0,98,133,1) 100%)'
        }else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = 'images/mist.png';
        }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'images/rain.png';
            gradientCard.style.background = 'linear-gradient(0deg, rgba(89,205,222,1) 0%, rgba(6,4,65,1) 100%)'
        }else{
            weatherIcon.src = 'images/snow.png';
        }
    
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.err').style.display = 'none';
    }

    // console.log(data);

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// checkWeather(London);