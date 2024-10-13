function getWeather(){
const valueName = document.getElementById('search').value;
const api= fetch('http://api.weatherapi.com/v1/current.json?key=524e03ad437947d1ae990146240508&q='+valueName+'')
 api.then(function(response){
    return response.json();
 })
 .then((data)=>{
    const dataAll = data.location
    document.getElementById('localtime').innerHTML =dataAll.localtime;
    document.getElementById('lat').innerHTML =dataAll.lat;
    document.getElementById('country').innerHTML =dataAll.country;
    document.getElementById('region').innerHTML =dataAll.region;

    const secdo = data.current
    const conditionData = secdo.condition
    document.getElementById('iconIMG').innerHTML ='<img src="'+conditionData.icon+'" alt="weather-image">';
    document.getElementById('textCloud').innerHTML =conditionData.text;

 })
 .catch((reject)=>{
    console.log(`ERROR: ${reject}`);
 })
}

//  const body = document.querySelector('body')
//  body.style.backgroundImage="url('./sunny.jpg')"
//  body.style.backgroundRepeat="no-repeat"
//  body.style.backgroundPosition="cover"


