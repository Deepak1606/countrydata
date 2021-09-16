import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import Loading from './Loading';
import Error from './Error';
import { Link, useParams } from 'react-router-dom';

const Country = ({ match }) => {
  const { countryName } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
  if (error) {
    return (
      <>
        <div className="search-wrapper">
        <Link to={'/'}>
            <button>Go Back</button>
          </Link>
        </div>
        <Error text={countryName} msg={error.message} />
      </>
    )
  } else if (!isLoaded) {
    return (
      <>
        <div className="search-wrapper">
          <Link to={'/'}>
            <button>Go Back</button>
          </Link>
        </div>
        <Loading />
      </>
    )
  } else {
    return (
      <div value={[items]}>
        <div className="search-wrapper">
          <Link to={'/'}>
            <button>Go Back</button>
          </Link>
        </div>
        {items.map(item => (
          <CountryCard flag={item.flag} name={item.name} population={item.population} region={item.region} subregion={item.subregion} capital={item.capital} languages={item.languages[0].name} borders={item.borders} />
        ))}
      </div>
    );
  }
}





export default Country;