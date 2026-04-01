
const apiKey = "3b8f3befeb2d143a8116f6d14e60a188";

export async function getWeatherData(city) {
  if (!apiKey) {
    throw new Error("Missing OpenWeather API key.");
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("City not found. Please try another city.");
    }

    if (response.status === 401) {
      throw new Error("Invalid API key. Please check your OpenWeather key.");
    }

    throw new Error("Could not fetch weather data.");
  }

  return response.json();
}