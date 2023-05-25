import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types"
import {} from "chart.js/auto";


const BarChart = ({ cases }) => {
  const chartData = {
    labels: cases.map((data) => data.date),
    datasets: [
      {
        label: 'New cases',
        data: cases.map((data) => data.count),
      },
    ],
  };

  console.log(cases)

  return <Bar data={chartData} />;
};

BarChart.propTypes = {
  cases: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      count: PropTypes.number,
    })
  ).isRequired,
};


export default BarChart;