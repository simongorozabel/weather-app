import { useEffect, useState } from "react";
import { getCoordinates } from "./services/getCoordinates";
import "./App.css";
import { getCurrentWeather } from "./services/getCurrentWeather";

function App() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();

      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude,
          coordinates.longitude
        );
        setWeather(weatherData);
      } else {
        //Controlar el caso en que el usuario no da permisos de acceso a la localización
      }
    };
    loadWeather();
    console.log(weather);
  }, []);
  return (
    <>
      <h1 className="title">Weather App</h1>
      {weather ? (
        <>
          <article className="weather">
            <h2>{weather.weather.main}</h2>
            <p>
              {isCelsius
                ? weather.temperature.celsius
                : weather.temperature.farenheit}
              {""} °{isCelsius ? "C" : "F"}
            </p>
            <div>
              <img
                src={weather.weather.icon}
                alt={weather.weather.description}
              />
            </div>
            <p>{weather.city}</p>
            <p className="country">{weather.country}</p>
          </article>
          <button
            onClick={() => {
              setIsCelsius(!isCelsius);
            }}
          >
            Change to °{isCelsius ? "F" : "C"}
          </button>
        </>
      ) : (
        <p>Loading Weather...</p>
      )}
    </>
  );
}

export default App;
