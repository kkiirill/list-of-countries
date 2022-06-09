/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line no-console
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CountriesItem({ countries }) {
  return (
    <Row xs={1} md={4} className="g-4">
      {countries.map(country => (
        <Col key={country.name.common}>
          <Card>
            <Link
              to={`${country.capital}`}
              style={{ textDecoration: 'none' }}
            >
              <Card.Img
                style={{
                  width: '250px',
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                variant="top"
                src={country.flags.png}
              />
            </Link>
            <Card.Body>
              <Card.Title>{country.name.common}</Card.Title>
              <Card.Text>
                {country.region}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))
      }

    </Row>
  );
}

CountriesItem.defaultProps = {
  countries: [],
};

CountriesItem.propTypes = {
  countries: PropTypes.array,
};
