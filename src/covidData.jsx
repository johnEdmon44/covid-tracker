import { useState, useEffect } from "react";
import RenderData from "./renderData";


const CovidData = () => {
  const [data, setData] = useState({});


  useEffect(() => {
    const getCovidData = async () => {
      try {
        const covidApi = "https://disease.sh/v3/covid-19/countries/Philippines?yesterday=yesterday&twoDaysAgo=twoDaysAgo&strict=true";
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

  return <RenderData data={data} />;
}


export default CovidData;