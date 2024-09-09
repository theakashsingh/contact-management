import axios from 'axios';

const BASE_URL = 'https://disease.sh/v3/covid-19';

export const getWorldwideData = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};

export const getCountryData = async () => {
  const response = await axios.get(`${BASE_URL}/countries`);
  return response.data;
};

export const getHistoricalData = async () => {
  const response = await axios.get(`${BASE_URL}/historical/all?lastdays=all`);
  return response.data;
};