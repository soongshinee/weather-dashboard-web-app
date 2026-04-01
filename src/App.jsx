import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import { getWeatherData } from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) {
      setError("Please enter a city.");
      setWeatherData(null);
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const data = await getWeatherData(trimmedCity);
      setWeatherData(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="app">
      <div className="weatherContainer">
        <h1 className="appTitle">Weather Dashboard</h1>
        <p className="appSubtitle">
          Search for a city to view its current weather.
        </p>

        <SearchForm city={city} setCity={setCity} onSubmit={handleSubmit} />

        <section className="resultArea">
          {isLoading && <p className="statusMessage">Loading weather data...</p>}

          {!isLoading && error && <ErrorMessage message={error} />}

          {!isLoading && !error && weatherData && (
            <WeatherCard data={weatherData} />
          )}
        </section>
      </div>
    </main>
  );
}

export default App;