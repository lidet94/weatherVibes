import { getLocation } from "./api/geo.js";
import { getWeather } from "./api/weather.js"

async function init() {
    const locationResult = await getLocation()
  

     if(locationResult){
        const locationDiv = document.getElementById("location")
        locationDiv.textContent = `${locationResult.city}, ${locationResult.country}`
      const weatherResult = await getWeather(locationResult.latitude, locationResult.longitude)
      console.log(weatherResult)
    } else{
        const cityInfo = document.getElementById("cityInfo")
        cityInfo.style.display = "block"
    }
}
init()