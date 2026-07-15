export function getMood(weatherCode){
    
    if(weatherCode === 0 || weatherCode === 1){
        return "Sunny"
    } else if(weatherCode === 2 || weatherCode === 3){
        return "Partly cloudy"
    } else if(weatherCode >= 51 && weatherCode <=67 || weatherCode >= 80 && weatherCode <=82){
        return "Rainy"
    } else if(weatherCode >= 71 && weatherCode <=77 || weatherCode >= 85 && weatherCode <=86){
        return "Snowy"
    } else if(weatherCode === 95 || weatherCode ===96 || weatherCode === 99){
        return "Stormy"
    } 
}

export const mealCategories ={
  Sunny: ["Seafood", "Vegan", "Vegetarian", "Side"],
  "Partly cloudy": ["Pasta", "Side"],
  Rainy: ["Beef", "Dessert"],
  Snowy: ["Lamb", "Dessert"],
  Stormy: ["Chicken", "Beef", "Dessert"]
}