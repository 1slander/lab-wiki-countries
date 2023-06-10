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

  const findCountryName = (countryCode) => {
    const country = countries.find(
      (country) => country.alpha3Code === countryCode
    );
    return country.name.common;
  };

  return (
    <>
      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
          alt={foundCountry.name.official}
          width={'100px'}
        />
        <h1>{foundCountry.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ widht: '30%' }}>Capital</td>
              <td>{foundCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} Km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {foundCountry.borders.map((borderCountry) => {
                  return (
                    <ul>
                      <li>
                        <Link to={`/${borderCountry.alpha3Code}`}>
                          {findCountryName(borderCountry)}
                        </Link>
                      </li>
                    </ul>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryDetails;
