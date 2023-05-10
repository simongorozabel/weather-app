import axios from "axios";
import { kelvinToCelsius } from "../utils/kelvinToCelsius";
import { kelvinToFarenheit } from "../utils/kelvinToFarenheit";
import { getIconById } from "../utils/getIconById";

export const getCurrentWeather = async (lat, lon) => {
  try {
    const params = { lat, lon, appid: "68715d0a1f3b60d05fcd1889e545dcd7" };
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      { params }
    );

    const weatherInfo = {
      country: response.data.sys.country,
      city: response.data.name,
      weather: {
        main: response.data.weather[0].main,
        description: response.data.weather[0].description,
        icon: getIconById(response.data.weather[0].icon),
      },
      temperature: {
        kelvin: response.data.main.temp,
        celsius: kelvinToCelsius(response.data.main.temp),
        farenheit: kelvinToFarenheit(response.data.main.temp),
      },
    };
    return weatherInfo;
  } catch (error) {
    console.log(error);
  }
};
