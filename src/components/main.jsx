import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';
import Card from './cards';
import './css/cards.css';

const Search = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [f] = useState(["name"]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/region/asia')
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
    
    
  function search(items) {
    return items.filter((row) => {
        return f.some(
          (column) => {
           return row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          }
        )
    })       
    };
    if (error) {
      return (
        <>        
        <Error text="Countries" msg={error.message} />
      </>
      ) 
    } else if (!isLoaded) {
      return (
          <>
        <Loading text="Countries" />
      </>
      )
    } else {
      return (
        <>
        <h3 color = "#f2f2f2" align="center">
              Search the Countries in Asia
          </h3>
          <br />
          <div id="search">
          <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Search for Countries..." value={q} onChange={(e) => setQ(e.target.value)}/>
          </div>
        <div className="row">
          {search(items).filter((coun)=> coun.region==='Asia').map(item => (
            <div className = "col-12 col-sm-4 col-md-2">
              <Link to={`/${item.name}`}>
              <Card flag={item.flag} name={item.name} population={item.population} region={item.region} capital={item.capital} currency={item.currencies} borders={item.borders} language={item.languages} subregion={item.subregion} />
            </Link>
            </div>
          ))}
        </div>

        </>
      );
    }  
  }
  
export default Search
