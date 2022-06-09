import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Row>
      <header>
        <div style={{ display: 'flex' }}>
          <Link to="/">Countries</Link>
          <div>
            <button type="button">
              change mode
            </button>
          </div>
        </div>
        <Form style={{ display: 'flex' }}>
          <Form.Control type="text" placeholder="search for a country" />
          <Form.Select aria-label="Default select example">
            <option>Filter by</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form>
      </header>
    </Row>
  );
}
