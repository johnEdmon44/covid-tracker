import PropTypes from "prop-types"


const RenderData = ({ data, countries, handleCountryChange, selectedCountry }) => {
  return (
    <section className="data">
      <div className="select--container">
        <select className="select" name="countris" id="countries" onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Select country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>


      <div className="cases">
        <h1>{data.country}</h1>

        <div>
          <p>TOTAL CASES: </p>
          <p style={{color: "red"}}>{data.cases}</p>
        </div>

        <div>
          <p>TOTAL DEATH: </p>
          <p style={{color: "black"}}>{data.deaths}</p>
        </div>

        <div>
          <p>TOTAL RECOVERED: </p>
          <p style={{color: "green"}}>{data.recovered}</p>
        </div>
      </div>
    </section>
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
  selectedCountry: PropTypes.string,
};

export default RenderData;