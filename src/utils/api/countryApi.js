import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const getCountry = (name) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${BASE_URL}/name/${name}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => resolve(data.data[0]))
      .catch((error) => reject(error));
  });
};

export const getAllCountries = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${BASE_URL}/all`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });
};
