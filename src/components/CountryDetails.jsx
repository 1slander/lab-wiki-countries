import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = ({ countries }) => {
  const { countryCode } = useParams();
  // console.log('code', countryCode);

  // const [foundCountry, setFoundCountry] = useState(null);

  // useEffect(() => {
  //   const countryData = countries.find((countryObj) => {
  //     return countryObj.alpha3Code === countryCode;
  //   });
  //   if (countryData) {
  //     setFoundCountry(countryData);
  //   }
  // }, [countryCode]);

  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryCode;
  });

  console.log(foundCountry);

  return (
    <>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt={foundCountry.name.official}
        width={'100px'}
      />
      <h2>{foundCountry.name.official}</h2>
      <p>Capital: {foundCountry.capital[0]}</p>
      <p>
        Area: {foundCountry.area} Km<sup>2</sup>
      </p>
      {foundCountry.borders.map((borderCountry) => {
        return (
          <ul>
            <li>{borderCountry}</li>;
          </ul>
        );
      })}
    </>
  );
};

export default CountryDetails;
