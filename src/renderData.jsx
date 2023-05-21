import PropTypes from "prop-types"


const RenderData = ({ data, countries, handleCountryChange }) => {
  return (
    <>
      <div>
        <h1>{data.country}</h1>
        <p>Total Cases: {data.cases}</p>
        <p>Total Deaths: {data.deaths}</p>
        <p>Total Recovered: {data.recovered}</p>
      </div>

      <div>
        <select name="countris" id="countries" onChange={handleCountryChange}>
          <option value="">Select country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </>
  )
};


RenderData.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.string,
    cases: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
  }).isRequired,
  countries: PropTypes.arrayOf(PropTypes.string),
  handleCountryChange: PropTypes.func,
};

export default RenderData;