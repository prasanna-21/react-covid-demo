import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  const { data } = await axios.get(url);
  console.log(data);
  const { confirmed, deaths, recovered, image, lastUpdate } = data;
  return {
    confirmed: confirmed.value,
    deaths: deaths.value,
    recovered: recovered.value,
    image,
    lastUpdate,
  };
};

export const fetchCountryData = async (country) => {
  const { data } = await axios.get(`${url}/countries/${country}`);
  const { confirmed, deaths, recovered, lastUpdate } = data;
  return {
    confirmed: confirmed.value,
    deaths: deaths.value,
    recovered: recovered.value,
    lastUpdate,
  };
};

export const fetchCountries = async () => {
  const { data } = await axios.get(`${url}/countries`);
  //   console.log(data.countries);
  return data.countries;
};
