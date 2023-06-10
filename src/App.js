import './App.css';
import countriesData from './countries.json';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('https://ih-countries-api.herokuapp.com/countries');
    const data = await res.json();
    const sortData = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setAllCountries(sortData);
  };

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={allCountries} />

          <Routes>
            <Route
              path="/:countryCode"
              element={<CountryDetails countries={allCountries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
