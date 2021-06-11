import axios from 'axios';

const URL = 'https://restcountries.eu/rest/v2'

export const getCountry = name => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${URL}/name/${name}`,
      headers: {
        'Content-Type': 'application/json',
      }, 
    })
    .then(data => resolve(data.data[0]))
    .catch(error => reject(error))
  })
}

export const getAllCountries = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `${URL}/all`,
      headers: {
        'Content-Type': 'application/json',
      }, 
    })
    .then(data => resolve(data.data))
    .catch(error => reject(error))
  })
}

