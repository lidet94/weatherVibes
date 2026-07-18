export async function getLocation() {

   //fetch data from geojs
   try {
      const response = await fetch("https://get.geojs.io/v1/ip/geo.json");

      if (!response.ok) {
         throw new Error(`HTTPS not found: ${response.status}`)
      } const data = await response.json();

      return {
         city: data.city,
         region: data.region,
         country: data.country,
         latitude: parseFloat(data.latitude),
         longitude: parseFloat(data.longitude)
      };

   } catch (error) {
      console.error("something went wrong", error)
      return null;
   }
} 