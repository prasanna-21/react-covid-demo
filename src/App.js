import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Search from "./components/search";
import { fetchData, fetchCountryData } from "./components/api";

function App() {
  const [data, setData] = useState({});
  const [countryName, setCountryName] = useState("");

  const getData = async () => {
    const resData = await fetchData();
    setData(resData);
  };
  const handleCountryData = async (country) => {
    console.log(country);
    setCountryName(country);
    const countryData = await fetchCountryData(country);
    setData(countryData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h3 className="ui center aligned header">Covid-19</h3>
      <Search getCountry={handleCountryData} />
      <p className="para">
        {countryName !== "" ? `Cases in ${countryName}` : ""}
      </p>
      <Card data={data} />
    </div>
  );
}

export default App;
