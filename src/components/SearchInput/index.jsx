import React, { useState } from 'react'
import './styles.css'

const DataList = ({list, onPress, setDisplay}) => 
  <div className="search__datalist" role="listbox">
    {list.length > 0 && list.map(country => 
      <div  
        key={`id:${country.alpha3Code}`}
        className="search__datalist__item"
        onClick={() => {
          onPress(country.name)
          setDisplay(false)
        }}
      >
        {country.name}
        <img style={{width: 20, height: 15, marginLeft: 20}} src={country.flag} alt=""/>
      </div>
    )
  }
  </div>

function SearcInput({value, placeholder, list, onChange, onPress, setCountry}) {
  const [display, setDisplay] = useState(false)
  
  return (
    <div>
      <div className="search__container">
        <input
          className="search__input" 
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => {
            setCountry({})
            setDisplay(true)
          }}
          spellCheck={false}
        />
        {value !== '' && display && <DataList list={list} onPress={onPress} setDisplay={setDisplay}/>}
      </div>
    </div>
  )
}

export default SearcInput
