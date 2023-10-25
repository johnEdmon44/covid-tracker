import { useState, useEffect } from "react";
import RenderData from "./renderData";
import BarChart from "./BarChart";


const CovidData = () => {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(localStorage.getItem("selectedCountry") || "Philippines");
  const [historyData, setHistoryData] = useState({});
  const [cases, setCases] = useState([]);


  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    localStorage.setItem("selectedCountry", country);
  };

  useEffect(() => {
    const getCovidData = async () => {
      try {
        const covidApi = `https://disease.sh/v3/covid-19/countries/${selectedCountry}?yesterday=yesterday&twoDaysAgo=twoDaysAgo&allowNull=allowNull`;
        const response = await fetch(covidApi);
        const jsonData = await response.json();
        setData(jsonData);
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

      const cases = data.timeline.cases;
      const dates = Object.keys(cases);

      setCases([]); // Reset the cases array before adding new cases

      for (let i = 1; i < dates.length; i++) {
        const currentDate = dates[i];
        const previousDate = dates[i - 1];
        const currentCases = cases[currentDate];
        const previousCases = cases[previousDate];
        const dailyNewCases = currentCases - previousCases;

        if (dailyNewCases >= 0) {
          setCases(prevCases => [...prevCases, { date: currentDate, count: dailyNewCases }]);
        }
        console.log(dailyNewCases);
      }
    };

    getHistoricalData();
  }, [selectedCountry]);

  return (
    <section className="data--container">
      <RenderData data={data} countries={countries} handleCountryChange={handleCountryChange} selectedCountry={selectedCountry} />
      <BarChart cases={cases} />
    </section>
  );
}


export default CovidData;