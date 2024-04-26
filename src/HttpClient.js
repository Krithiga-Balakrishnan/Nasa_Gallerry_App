import axios from "axios"; // Import axios only once

import moment from "moment";

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {};
    const configUrl = config.url;
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const getApod = () => {
  return axios.get(`${nasaEndpoint}planetary/apod`);
};

const getPhoto = date => {
  const formattedDate = moment(date).format("YYYY-MM-DD");
  return axios
    .get(`${nasaEndpoint}planetary/apod`, {
      params: { date: formattedDate }
    })
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching APOD:", error);
      throw error;
    });
};

const getMarsPhoto = (date, camera) => {
  const formattedDate = moment(date).format("YYYY-MM-DD");
  return axios
    .get(`${nasaEndpoint}mars-photos/api/v1/rovers/curiosity/photos`, {
      params: { earth_date: formattedDate, camera, api_key: nasaApiKey }
    })
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching Mars photo:", error);
      throw error;
    });
};

const HttpClient = {
  getApod,
  getPhoto,
  getMarsPhoto
};

export default HttpClient;

