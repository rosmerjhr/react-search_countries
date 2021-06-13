import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const CardCountry = ({country}) => 
  <div className="card__container">
    <div className="card">
      <h2>{country.name}</h2>
      <div className="card__rigthSize">
        <img className="card__country-flag" src={country.flag} alt="flag of the country"/>
      </div>  
    </div>
    <div className="card">
      <h3>Capital city</h3>
      <div className="card__rigthSize">
        <p>{country.capital}</p>
      </div>
    </div>  
    <div className="card">
      <h3>Land area</h3>
      <div className="card__rigthSize">
        <p>{country.area} km2</p>
      </div>
    </div>  
    <div className="card">
      <h3>Population</h3>
      <div className="card__rigthSize">
        <p>{country.population}</p>
      </div>
    </div>  
    <div className="card">
      <h3>Languaje</h3>
      <div className="card__rigthSize">
        <p>{country.languages}</p>
      </div>
    </div>  
    <div className="card">
      <h3>Currency</h3>
      <div className="card__rigthSize">
        <p>{country.currencies}</p>
      </div>
    </div>
  </div>

CardCountry.propTypes = {
  country: PropTypes.object.isRequired,
}
  
export default CardCountry;