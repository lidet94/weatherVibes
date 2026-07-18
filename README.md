# WeatherVibes 🌤️

A weather-based lifestyle app that detects your location and matches the current weather to a mood, then serves up a curated music playlist and meal suggestions to match the vibe.

**Live Demo:** [lidet94.github.io/weatherVibes/ ](https://lidet94.github.io/weatherVibes/)
**Repo:** https://github.com/lidet94/weatherVibes

---

## What it does

WeatherVibes uses your IP address to detect your location, fetches real-time weather data, and maps the current conditions to one of five moods: **Sunny, Partly Cloudy, Rainy, Snowy, or Stormy** (plus a **Night** mode at sunset).

Based on that mood, the app:
- Changes the entire page theme and colour palette
- Displays a matching weather icon
- Loads a curated YouTube playlist
- Suggests three random meals from a matching food category

---

## Features

- Automatic location detection via IP address
- Live weather data including temperature, feels like, and humidity
- Five dynamic colour themes that change with the weather
- Night mode that activates automatically at sunset
- Mood-matched YouTube playlist
- Three random meal suggestions with images and recipe links
- Manual city fallback input if location detection fails
- Responsive layout — works on mobile and desktop

---

## APIs Used

| [GeoJS](https://get.geojs.io/) | IP-based location detection |
| [Open-Meteo](https://open-meteo.com/) | Free real-time weather data |
| [TheMealDB](https://www.themealdb.com/) | Meal suggestions by category |
| [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference) | Embedded mood playlist |

No API keys required for GeoJS, Open-Meteo, or TheMealDB.

---

## Tech Stack

- HTML5
- CSS3 (CSS custom properties, CSS Grid, Flexbox)
- Vanilla JavaScript (ES6 Modules, async/await, Fetch API)

---

## How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/lidet94/weatherVibes.git
cd weatherVibes
```

2. Open with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code

---

## Project Structure

```
weathervibes/
├── index.html
├── style.css
├── app.js                  ← main orchestrator
├── api/
│   ├── geo.js              ← GeoJS location fetch
│   ├── weather.js          ← Open-Meteo weather fetch
│   ├── meals.js            ← TheMealDB meal fetch
│   └── youtube.js          ← YouTube IFrame API loader
├── data/
│   └── moods.js            ← mood mapping, icons, playlists, meal categories
└── assets/
    └── icons/              ← SVG weather icons
```

---

## How the Data Flows

```
GeoJS → coordinates → Open-Meteo → weather code
                                         ↓
                                    mood mapper
                                    ↙    ↓    ↘
                             Theme  Icon  YouTube  TheMealDB
```

---

## What I Learned

- How to use `fetch()` with `async/await` and handle errors properly
- How to chain multiple API calls where each one depends on the previous result
- How ES Modules work (`import`/`export`) and how to structure a modular JS project
- How CSS custom properties enable dynamic theming with a single class change on `body`
- How to work with real API responses — reading documentation, parsing JSON, accessing nested properties
- How to use Git for version control with meaningful commit messages
- How to debug network requests using Chrome DevTools

---

## Future Improvements

- Add manual city search using Open-Meteo geocoding API
- Add a 5-day forecast section
- Add animated weather backgrounds

---

## Credits

Built by: Bana
GitHub: https://github.com/lidet94  
SVG icons from [SVGRepo](https://www.svgrepo.com/)  
Colour inspiration from Pinterest and [ColorHunt](https://colorhunt.co/)