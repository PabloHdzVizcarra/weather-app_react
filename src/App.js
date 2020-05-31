import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather'
import Error from './components/Error'

function App() {

  const [search, setSearch] = useState({
    cuidad: '',
    pais: ''
  });

  const [checkCity, setCheckCity] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { cuidad, pais } = search;

  useEffect(() => {
    const checkAPI = async () => {

      if (checkCity) {
        const keyAPI = '7f6f51e9a2348ff93cea0ef22d5be41a';
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&appid=${keyAPI}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        setCheckCity(false);
      }

      // detectar si hubo resultados correctos en la consulta

      if (result.cod === "404") {
        setError(true);
      } else {
        setError(false)
      }

    }
    checkAPI()
    // eslint-disable-next-line
  }, [checkCity]);

  let component;
  if (error) {
    component = <Error  message="No hay resultados" />
  } else {
    component = <Weather result = { result } />
  }


  return (
    <Fragment>
      <Header
      tittle='Clima React App'
      />

      <div className="contenedor-form grey darken-1">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setCheckCity={setCheckCity}
              />
            </div>
            <div className="col m6 s12">
              { component }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
