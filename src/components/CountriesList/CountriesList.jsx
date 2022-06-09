/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { getCountries } from '../../Api/api';
import CountriesItem from '../CountriesItem/CountriesItem';
import './CountriesList.scss';

export default function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCoutries = async() => {
      try {
        getCountries().then((data) => {
          console.log(data);
          setCountries(data);
        });
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Erro: ${err.message}`);
        }
      }
    };

    fetchCoutries();
  }, []);

  return (
    <ul className="countries">
      <CountriesItem countries={countries} />
    </ul>
  );
}
