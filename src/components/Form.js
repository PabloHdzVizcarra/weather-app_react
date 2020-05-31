import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'



const Form = ({ search, setSearch, setCheckCity }) => {
  const [error, setError] = useState(false);

  // funcion que coloca elementos en el state
  const handleChange = e => {
    // Actualizar el state
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const { cuidad, pais } = search;

  const handleSubmit = e => {
    e.preventDefault();

    // Validar
    if (cuidad.trim() === '' || pais.trim() === '') {
      setError(true);
      return
    }

    setError(false);
    setCheckCity(true);

  }

  return (
    <form
      onSubmit={ handleSubmit }
    >
      { error ? <Error  message='Ambos campos son obligatorios' /> : null }

      <div className="input-field col s12">
        <input
          type="text"
          name="cuidad"
          id="cuidad"
          value={ cuidad }
          onChange={ handleChange }
        />
        <label htmlFor="cuidad">Cuidad: </label>
      </div>

      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          value={ pais }
          onChange={ handleChange }
        >
          <option value="">-- Selecciona un pais --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>

        <label htmlFor="pais">Pais: </label>
      </div>

      <div className="input-field">
        <button
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block black accent-4 col s12"
        >Enviar</button>
      </div>

    </form>
  )
}

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.object.isRequired,
  setCheckCity: PropTypes.bool.isRequired
}

export default Form
