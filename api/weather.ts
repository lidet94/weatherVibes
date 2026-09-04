interface CurrentWeather{
   temperature_2m: number,
   weather_code: number,
   apparent_temperature: number,
   wind_speed_10m: number, 
   relative_humidity_2m: number,
   is_day: number
}

interface WeatherResponse{
   latitude: number;
   longitude: number;
   current: CurrentWeather;
}

export async function getWeather(latitude: string, longitude: string) : Promise< WeatherResponse | null> {
    // Convert coordinate strings to float numbers
    const lat = parseFloat(latitude)
    const long = parseFloat(longitude)

    //fetched data from open-meteo
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,relative_humidity_2m,is_day`)

        if (!response.ok) {
            throw new Error(`HTTPS not found: ${response.status}`)
        }
        const data: WeatherResponse = await response.json()
        return data

    } catch (error) {
        console.error("something went wrong", error)
        return null;
    }
}