export async function getWeather(latitude, longitude) {
    const lat = parseFloat(latitude)
    const long = parseFloat(longitude)

    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,weather_code`)

        if(!response.ok){
            throw new Error(`HTTPS not found: ${response.status}`)
        }
        const data = await response.json()
        return data
    }catch (error){console.error("something went wrong", error)
        return null;
    }
}