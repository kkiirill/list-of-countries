export const COUNTRIES_ALL_URL = 'https://restcountries.com/v3.1';

export const getCountries = async() => {
  const response = await fetch(`${COUNTRIES_ALL_URL}/all`);

  return response.json();
};
