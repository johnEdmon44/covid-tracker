import { useState, useEffect } from "react";
import RenderData from "./renderData";


const CovidData = () => {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Philippines");
  const [historyData, setHistoryData] = useState({});


  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    const getCovidData = async () => {
      try {
        const covidApi = `https://disease.sh/v3/covid-19/countries/${selectedCountry}?yesterday=yesterday&twoDaysAgo=twoDaysAgo&allowNull=allowNull`;
        const response = await fetch(covidApi);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch(error) {
        console.log("error fetching covid data" + error);
      }
    };

    getCovidData();
  }, [selectedCountry]);


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://disease.sh/v3/covid-19/countries");
        const data = await response.json();
        const countryNames = data.map(country => country.country);
        setCountries(countryNames);
        console.log(countryNames);
      } catch (error) {
        console.log("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);


  useEffect(() => {
    const getHistoricalData = async () => {
      const response = await fetch(`https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=30`);
      const data = await response.json();
      setHistoryData(data);
      console.log(data);
    };

    getHistoricalData();
  }, [selectedCountry]);

  return <RenderData data={data} countries={countries} handleCountryChange={handleCountryChange} selectedCountry={selectedCountry} />;
}


export default CovidData;