import React from 'react'
import './styles.css'

const DataList = ({list, onPress}) => 
  <div className="search__datalist" role="listbox">
    {list.map((country) => 
      <div  
        key={`id:${country.alpha3Code}`}
        className="search__datalist__item"
        onClick={() => {
          onPress(country.name)
        }}
      >
        {country.name}
        <img style={{width: 20, height: 15, marginLeft: 20}} src={country.flag} alt=""/>
      </div>
    )
  }
  </div>

function SearcInput({value, filteredCountries, onChange, onPress}) {
  const showDataList = Boolean(filteredCountries.length);
  
  return (
    <div>
      <div className="search__container">
        <input
          className="search__input" 
          type="text"
          placeholder="Find a country"
          value={value}
          onChange={onChange}
          spellCheck={false}
        />
        {showDataList && (
          <DataList list={filteredCountries} onPress={onPress} />
        )}
      </div>
    </div>
  )
}

export default SearcInput
