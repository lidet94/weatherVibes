export async function getWeather(latitude, longitude) {
    // Convert coordinate strings to float numbers
    const lat = parseFloat(latitude)
    const long = parseFloat(longitude)

    //fetched data from open-meteo
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,relative_humidity_2m,is_day`)

        if (!response.ok) {
            throw new Error(`HTTPS not found: ${response.status}`)
        }
        const data = await response.json()
        return data

    } catch (error) {
        console.error("something went wrong", error)
        return null;
    }
}