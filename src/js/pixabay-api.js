import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55832000-3ddcf2f713b5877a9b0974dfc';
const DEFAULT_PARAMS = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      ...DEFAULT_PARAMS,
      q: query,
    },
  });

  return response.data;
}
