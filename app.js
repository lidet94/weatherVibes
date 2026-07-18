import { getLocation } from "./api/geo.js";
import { getMeals } from "./api/meals.js";
import { getWeather } from "./api/weather.js"
import { getMood, mealCategories, moodIcons } from "./data/moods.js";
import { loadMusic } from "./api/youtube.js";

//sets the theme style 
function applyTheme(mood) {
  document.body.className = `theme-${mood.toLowerCase().replace(' ', '-')}`
}

async function init() {
  const locationResult = await getLocation()

  //Displays location,city ,region and country
  if (locationResult) {
    const locationDiv = document.getElementById("location")
    locationDiv.textContent = `${locationResult.city}, ${locationResult.region}, ${locationResult.country}`

    // Fetch weather data using coordinates from GeoJS
    const weatherResult = await getWeather(locationResult.latitude, locationResult.longitude)


    const condition = getMood(weatherResult.current.weather_code)

    //Display current temperature
    const temperatureDiv = document.getElementById("temperature")
    temperatureDiv.textContent = `${weatherResult.current.temperature_2m}°C`

    const moodDiv = document.getElementById("mood")

    const moodIcon = document.getElementById("weatherIcon")

    //Display apparent temperature
    const app_temperature = document.getElementById("app_temp")
    app_temperature.textContent = `Feels like: ${weatherResult.current.apparent_temperature}°C`

    //Display relative humidity
    const relHumdity = document.getElementById("humidity")
    relHumdity.textContent = `Humidity is ${weatherResult.current.relative_humidity_2m}%`

    const isDay = weatherResult.current.is_day

    //Checks if day night time display Night icon and text
    if (isDay === 0) {
      applyTheme("Night")
      moodDiv.textContent = "Clear Night"
      moodIcon.src = moodIcons["Night"]
    } else {
      applyTheme(condition)
      moodDiv.textContent = condition
      moodIcon.src = moodIcons[condition]

    }

    // Load a YouTube playlist matched to the current mood
    loadMusic(condition);

    //Get the meals and assign to the moods
    const options = mealCategories[condition]
    //Make the meals random
    const category = options[Math.floor(Math.random() * options.length)]
    const mealsResult = await getMeals(category)

    //Check the meals match and shuffle them so only 3 shows
    if (mealsResult && mealsResult.meals) {

      const shuffled = mealsResult.meals.sort(() => Math.random() - 0.5)
      const threeMeals = shuffled.slice(0, 3)

      const container = document.getElementById("mealsContainer")

      //For each meal create a div card including image,title,and link to view recipe
      threeMeals.forEach(meal => {

        const card = `<div class="card">
 <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank"> <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/></a> 
  <h3>${meal.strMeal}</h3>
  <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a>
</div>`

        container.innerHTML += card

      })
    } else {
      const container = document.getElementById("mealsContainer")
      container.innerHTML = `<p class="error-msg">Could not load recipes right now. Try refreshing!</p>`;
    }
  } else {
    const cityInfo = document.getElementById("cityInfo")
    cityInfo.style.display = "block"
  }
}
init()