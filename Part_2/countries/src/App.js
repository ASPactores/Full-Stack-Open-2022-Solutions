import { useEffect, useState } from "react";
import axios from "axios";
import DisplayCountry from "./components/DisplayCountry";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState(null);
  const [viewedCountry, setViewedCountry] = useState(null);

  const url = "https://restcountries.com/v3.1/all";
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios.get(url).then((response) => {
      const sortedCountry = response.data.sort((a, b) => {
        const countryA = a.name.common.toLowerCase();
        const countryB = b.name.common.toLowerCase();

        if (countryA < countryB) {
          return -1;
        }

        if (countryA > countryB) {
          return 1;
        }

        return 0;
      });

      setCountries(sortedCountry);
    });
  }, []);

  useEffect(() => {
    if (viewedCountry) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${viewedCountry}&appid=${api_key}&units=metric`
        )
        .then((response) => setWeather(response.data))
        .catch(() => console.log("Cannot get information."));
    }
  }, [viewedCountry, api_key]);

  const handleSearchInput = (event) => setSearchInput(event.target.value);
  const handleViewedCountry = (capital) =>
    setTimeout(() => setViewedCountry(capital), 0);

  return (
    <div>
      <div>
        Find Countries{" "}
        <input value={searchInput} onChange={handleSearchInput} />
      </div>
      <DisplayCountry
        countries={countries}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleViewedCountry={handleViewedCountry}
        weather={weather}
      />
    </div>
  );
}

export default App;
