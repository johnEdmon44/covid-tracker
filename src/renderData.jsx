import PropTypes from "prop-types"


const RenderData = ({ data }) => {
  return (
    <div>
      <h1>{data.country}</h1>
      <p>Total Cases: {data.cases}</p>
      <p>Total Deaths: {data.deaths}</p>
      <p>Total Recovered: {data.recovered}</p>
    </div>
  )
};


RenderData.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.string,
    cases: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
  }).isRequired,
};

export default RenderData;