import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import CountriesList from './components/CountriesList/CountriesList';
import { CountryModal } from './components/CountryModal/CountryModal';
import Header from './components/Header/Header';

export const App = () => (
  <Container fluid>
    <Header />
    <Routes>
      <Route path="/" element={<CountriesList />} />
      <Route path="/:capital" element={<CountryModal />}>
        {/* <Route path=":capital" element={<CountryModal />} /> */}
      </Route>
    </Routes>
  </Container>
);
