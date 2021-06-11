import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const CardCountry = ({country}) => 
  <div className="card__container">
    <div className="card">
      <h2>{country.name}</h2> 
      <span>{country.alpha3Code}</span>
    </div>
    <div className="card">
      <h3>Capital city</h3>
      <span>{country.capital}</span>
    </div>  
    <div className="card">
      <h3>Land area</h3>
      <span>{country.area}</span>
    </div>  
    <div className="card">
      <h3 className="card">Population</h3>
      <span>{country.population}</span>
    </div>  
    <div className="card">
      <h3>Languaje</h3>
      <span className="card">{country.languages}</span>
    </div>  
    <div className="card">
      <h3>Currency</h3>
      <span>{country.currencies}</span>
    </div>
  </div>

CardCountry.propTypes = {
  country: PropTypes.object.isRequired,
}
  
export default CardCountry;