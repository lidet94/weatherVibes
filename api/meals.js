export async function getMeals(category) {
    
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)

        if(!response.ok){
            throw new Error(`HTTPS not found:${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error){
        console.error("something went wrong", error)
        return null
    }
}