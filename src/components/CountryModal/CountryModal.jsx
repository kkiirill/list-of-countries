/* eslint-disable prefer-template */
/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line no-console
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { COUNTRIES_ALL_URL } from '../../Api/api';

export function CountryModal({ setLgShow, lgShow }) {
  // const [smShow, setSmShow] = useState(false);
  const { capital } = useParams();
  const countryURL = `${COUNTRIES_ALL_URL}/capital/${capital}`;

  const [country, setCountry] = useState();

  useEffect(() => {
    axios.get(countryURL).then((response) => {
      const responseCountries = response.data;

      console.log(response.data);
      setCountry(responseCountries);
    });
  }, []);

  return (
    <>
      <div>
        {country && (
          <Card>
            <Card.Img
              variant="top"
              src={country[0].flags.png}
            />
            <Card.Body>
              <Card.Title>{country[0].name.common}</Card.Title>
              <Card.Text>
                {country[0].capital}
              </Card.Text>
              <Card.Text>
                {country[0].borders.map(element => element + ' ')}
              </Card.Text>
              <Card.Text>
                {country[0].population}
              </Card.Text>
              <Card.Text>
                {country[0].region}
              </Card.Text>
              <Card.Text>
                {country[0].languages.deu}
              </Card.Text>
              <Card.Text>
                <Link to="/">{country[0].maps.googleMaps}</Link>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        )}
      </div>

    </>
  );
}
