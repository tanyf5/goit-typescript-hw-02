import axios from 'axios';
import { DataInterface } from '../types';

const API_KEY = 'W4aj9EBgwWd4kkzobuMKtTGa7JsxVi84moGSo3ZG_XM';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (
  query: string,
  page: number
): Promise<DataInterface> => {
  const { data } = await axios.get<DataInterface>(
    `search/photos?query=${query}&page=${page}`
  );

  return data;
};