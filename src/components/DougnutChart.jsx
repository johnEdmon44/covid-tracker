import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import useFetchData from "./useFetchData";


const DoughnutChart = () => {
  const fetchData = useFetchData("reports/total");

  if(!fetchData) {
    return <>Loading...</>
  }

  const totalCases = fetchData.data.confirmed;
  const deathCases =  fetchData.data.deaths;
  const activeCases =  fetchData.data.active;
  const recoveredCases =  fetchData.data.recovered;
  const updateDate = fetchData.data.date;


  const data = {
    labels: ["Active", "Recovered", "Death"],
    datasets: [
      {
        label: 'cases',
        data: [activeCases, recoveredCases, deathCases],
        backgroundColor: [
          'rgba(102, 0, 0, 1)',
          'rgba(0, 102, 0, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderColor: [
          'rgba(102, 0, 0, 1)',
          'rgba(0, 102, 0, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="grid mt-20 justify-center">
      <h1>Worldwide: <span className="text-red-700">{totalCases}</span></h1>
      <p>{updateDate}</p>
      <div className="w-96 h-96">
        <Doughnut data={data} />
      </div>
    </div>
  )
}


DoughnutChart.propTypes = {
  chartData: PropTypes.object,
}


export default DoughnutChart;