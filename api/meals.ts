interface Meal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

interface MealsResponse {
    meals: Meal[];
}

export async function getMeals(category: string): Promise<MealsResponse | null> {

    //fetched data from themealdb
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)

        if (!response.ok) {
            throw new Error(`HTTPS not found:${response.status}`)
        }
        const data: MealsResponse = await response.json()
        return data
    } catch (error) {
        console.error("something went wrong", error)
        return null
    }
}