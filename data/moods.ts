// Maps Open-Meteo weather codes to one of five mood strings
export function getMood(weatherCode: number): string | undefined {

  if (weatherCode === 0 || weatherCode === 1) {
    return "Sunny"
  } else if (weatherCode === 2 || weatherCode === 3 || weatherCode === 45 || weatherCode === 48) {
    return "Partly cloudy"
  } else if (weatherCode >= 51 && weatherCode <= 67 || weatherCode >= 80 && weatherCode <= 82) {
    return "Rainy"
  } else if (weatherCode >= 71 && weatherCode <= 77 || weatherCode >= 85 && weatherCode <= 86) {
    return "Snowy"
  } else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
    return "Stormy"
  }
}
interface MealCategories {
  [key: string]: string[];
}

//Matched the moods to a category from theMealdb
export const mealCategories: MealCategories = {
  Sunny: ["Seafood", "Vegan", "Vegetarian", "Starter"],
  "Partly cloudy": ["Pasta", "Miscellaneous"],
  Rainy: ["Beef", "Dessert"],
  Snowy: ["Lamb", "Dessert"],
  Stormy: ["Chicken", "Beef", "Dessert"]
}

interface PlaylistIds {
  [key: string]: {
    playlistId: string;
    displayName: string;
  };
}
//Matched the moods to a playlistId from Youtube
export const playlistIds: PlaylistIds = {
  sunny: {
    playlistId: 'PLJXKx9DWsGy0',
    displayName: 'Sunny Afro-Fusion Beats'
  },
  "partly cloudy": {
    playlistId: "PLxq4bceUOLlSkqhJtk9nE2wYrRUR6Tx46",
    displayName: 'Smooth chilled'
  },
  rainy: {
    playlistId: "PL11WrGDTdUZL4uIIT7DsKk7cfzPiIsqat",
    displayName: 'Rainy Day Chillhop'
  },
  snowy: {
    playlistId: "PLyORnIW1xT6z8za6mAQhjjzr_EQTq8qcY",
    displayName: 'Cozy Winter Acoustic'
  },
  stormy: {
    playlistId: 'PL1nFxIcmdte0I3xduvBj1LUh7QfIfjhAh',
    displayName: 'Stormy Cinematic Epic'
  }
};

interface MoodIcons {
  [key: string]: string;
}
//Matched moods to an icon from svgrepo.com
export const moodIcons: MoodIcons = {
  Sunny: "./assets/icons/sunny.svg",
  "Partly cloudy": "./assets/icons/cloudy.svg",
  Rainy: "./assets/icons/rain.svg",
  Snowy: "./assets/icons/snow.svg",
  Stormy: "./assets/icons/storm-thunder.svg",
  Night: "./assets/icons/night-moon.svg"
}