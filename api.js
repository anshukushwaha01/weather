const url = 'http://api.weatherapi.com/v1/current.json?key=524e03ad437947d1ae990146240508&q=india'

fetch(url).then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
