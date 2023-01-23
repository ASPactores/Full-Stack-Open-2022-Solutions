const DisplayCountry = ({
  countries,
  searchInput,
  setSearchInput,
  handleViewedCountry,
  weather,
}) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );
  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    handleViewedCountry(country.capital[0]);

    if (!weather) return null;

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <h3>Flag:</h3>
        <img
          src={country.flags.svg}
          alt={`${country.name.common} Flag`}
          height="200px"
        />
        <h3>Weather in {country.capital[0]}</h3>
        <p>Temperature: {weather.main.temp} Celsius</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    );
  }
  
  if (filteredCountries.length > 10) {
    return <div>Too many matches. Please specify another filter.</div>;
  }
  
  return filteredCountries.map((country) => (
    <div key={country.name.common}>
      {country.name.common}{" "}
      <button
        value={country.name.common}
        onClick={(event) => setSearchInput(event.target.value)}
      >
        Show
      </button>
    </div>
  ));
};
export default DisplayCountry;
