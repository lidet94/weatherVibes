import { getLocation } from "./api/geo.js";
import { getMeals } from "./api/meals.js";
import { getWeather } from "./api/weather.js"
import { getMood, mealCategories } from "./data/moods.js";

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
     
    const options = mealCategories[condition]
    const category = options[Math.floor(Math.random() * options.length)]
    const mealsResult = await getMeals(category)
    console.log(mealsResult)

    const shuffled = mealsResult.meals.sort(() => Math.random() - 0.5)
    const threeMeals = shuffled.slice(0, 3)

    const container = document.getElementById("mealsContainer")

    threeMeals.forEach(meal => {
  console.log(meal.strMeal)

  const card = `<div class="card">
  <img src="${meal.strMealThumb}" />
  <h3>${meal.strMeal}</h3>
  <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a>
</div>`

container.innerHTML += card
})

     console.log(condition)
     console.log(weatherResult)
    } else{
        const cityInfo = document.getElementById("cityInfo")
        cityInfo.style.display = "block"
    }
}
init()