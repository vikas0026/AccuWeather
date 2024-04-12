//hii vikas
let searchbtn = document.querySelector("#search")
 let searchbox = document.querySelector(".search input")
 let weathericon = document.querySelector(".wicon")
 searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value)
 }
    
 )
const apikey = "98e5218fefde7e36ff3bb70c00efea30";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkweather( city){
    
        const result = await fetch(apiurl + city + `&appid=${apikey}`);
        if(result.status == 404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display = "none";
        }else{
        var data = await result.json();
        console.log(data);
       
     
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity +" %" ;
   document.querySelector(".wind").innerHTML = Math.round( data.wind.speed) +" km/hr";
   
 if(data.weather[0].main== "Clouds"){
      weathericon.src = "clouds.webp"
 }
 if(data.weather[0].main== "Clear"){
    weathericon.src = "clear.webp"
}
if(data.weather[0].main== "Rain"){
    weathericon.src = "rain.png"
}
if(data.weather[0].main== "Mist"){
    weathericon.src = "mist.webp"
}
if(data.weather[0].main== "Snow"){
    weathericon.src = "Snow.webp"
}


document.querySelector(".weather").style.display
= "block"}
}
