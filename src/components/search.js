import React, { useState, useEffect } from "react";
import { fetchCountries } from "./api";

function Search(props) {
  const { getCountry } = props;
  const [countries, setCountries] = useState([]);

  const fetchCountriesData = async () => {
    const countries = await fetchCountries();
    setCountries(countries.map((country) => country.name));
  };
  //   fetchCountriesData();
  console.log(countries);
  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <div className="ui centered form">
      <div className="  field ">
        <select
          className="ui search dropdown"
          style={{ width: "200px" }}
          defaultValue=""
          onChange={(e) => getCountry(e.target.value)}
        >
          <option value="">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Search;
