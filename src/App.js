import './App.css';
import countriesData from './countries.json';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countriesData} />

      <Routes>
        <Route
          path="/:countryCode"
          element={<CountryDetails countries={countriesData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
