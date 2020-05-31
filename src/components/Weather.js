import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({ result }) => {

  const { name, main } = result;

  if (!name) return null

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="back-text">
        <h2>El clima de { name } es: </h2>
        <p className="temperatura">
          { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
        </p>
        <p className="">Temperatura Maxima:
          { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
        </p>
        <p className="">Temperatura Minima:
          { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
        </p>
      </div>
    </div>
  )
}

Weather.propTypes = {
  result: PropTypes.object.isRequired
}

export default Weather