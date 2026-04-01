
function SearchForm({ city, setCity, onSubmit }) {
  return (
    <form className="weatherForm" onSubmit={onSubmit}>
      <input
        type="text"
        className="cityInput"
        placeholder="Enter city name..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
}

export default SearchForm;