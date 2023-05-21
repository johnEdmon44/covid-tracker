import { useState, useEffect } from "react";
import RenderData from "./renderData";


const CovidData = () => {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    const getCovidData = async () => {
      try {
        const covidApi = "https://disease.sh/v3/covid-19/countries/philippines?yesterday=yesterday&twoDaysAgo=twoDaysAgo&allowNull=allowNull";
        const response = await fetch(covidApi);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch(error) {
        console.log("error fetching covid data" + error);
      }
    };

    getCovidData();
  }, []);


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


  return <RenderData data={data} countries={countries}/>;
}


export default CovidData;