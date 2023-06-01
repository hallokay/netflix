import { TMDB_BASE_URL, API_KEY } from "./constants";

const generateApiUrl = (path, queryParams = {}) => {
  const queryString = new URLSearchParams(queryParams).toString();

  return `${TMDB_BASE_URL}/${path}?api_key=${API_KEY}${queryString ? `&${queryString}`: ''}`;
};

export default generateApiUrl;
