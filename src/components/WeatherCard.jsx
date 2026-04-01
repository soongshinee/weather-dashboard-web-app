
function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌦️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "☀️";
    case weatherId > 800 && weatherId < 900:
      return "☁️";
    default:
      return "❓";
  }
}

function capitalizeFirstLetter(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function WeatherCard({ data }) {
  const {
    name,
    sys,
    main: { temp, feels_like, humidity },
    weather: [{ description, id }],
    wind,
  } = data;

  return (
    <article className="card">
      <p className="weatherEmoji">{getWeatherEmoji(id)}</p>
      <h2 className="cityDisplay">
        {name}
        {sys?.country ? `, ${sys.country}` : ""}
      </h2>

      <p className="tempDisplay">{temp.toFixed(1)}°C</p>

      <p className="descDisplay">{capitalizeFirstLetter(description)}</p>

      <div className="weatherDetails">
        <p className="detailItem">
          <span className="detailLabel">Feels like</span>
          <span>{feels_like.toFixed(1)}°C</span>
        </p>

        <p className="detailItem">
          <span className="detailLabel">Humidity</span>
          <span>{humidity}%</span>
        </p>

        <p className="detailItem">
          <span className="detailLabel">Wind</span>
          <span>{wind?.speed ?? 0} m/s</span>
        </p>
      </div>
    </article>
  );
}

export default WeatherCard;