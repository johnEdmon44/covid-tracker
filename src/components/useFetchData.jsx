import { useEffect, useState } from "react";


const useFetchData = (endpoint) => {
  const [casesData, setCasesData] = useState(null);
  const CACHE_EXPIRY_TIME = 6 * 60 * 60 * 1000; // 6 hours in milliseconds


  useEffect(() => {
    const fetchData = async () => {
      try {
        const cacheData = JSON.parse(localStorage.getItem(endpoint));
        const currentTime = Date.now();

        if(cacheData && currentTime - cacheData.timestamp < CACHE_EXPIRY_TIME) {
          setCasesData(cacheData.data);
        } else {
          const response = await fetch(`https://covid-api.com/api/${endpoint}?date=2020-12-31`);
          const data = await response.json();
          setCasesData(data);
          localStorage.setItem(endpoint, JSON.stringify({ data, timestamp: currentTime }));
        }
      } catch(error) {
        console.log(error);
      }
    }

    fetchData();
  }, [endpoint, CACHE_EXPIRY_TIME]);

  return casesData;
};


export default useFetchData;