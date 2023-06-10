import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  const divStyle = {
    maxWidth: '90vh',
    overflow: 'scroll',
  };
  return (
    <div className="col-5" style={divStyle}>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} className="list-group flex-column">
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.official}
                className="mr-3"
                width="50px"
              />
              <p>{country.name.common}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
