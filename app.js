import { getLocation } from "./api/geo.js";
import { getWeather } from "./api/weather.js"
import { getMood } from "./data/moods.js";

async function init() {
    const locationResult = await getLocation()
  

     if(locationResult){
        const locationDiv = document.getElementById("location")
        locationDiv.textContent = `${locationResult.city}, ${locationResult.country}`
      const weatherResult = await getWeather(locationResult.latitude, locationResult.longitude)

     const condition = getMood(weatherResult.current.weather_code)
    
     const temperatureDiv = document.getElementById("temperature")
     temperatureDiv.textContent = `${weatherResult.current.temperature_2m}°C`
     
     const moodDiv = document.getElementById("mood")
     moodDiv.textContent = `${condition}`
    

     console.log(condition)
     console.log(weatherResult)
    } else{
        const cityInfo = document.getElementById("cityInfo")
        cityInfo.style.display = "block"
    }
}
init()