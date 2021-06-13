import React, { useEffect, useState } from 'react'
import './styles.css'
import CardCountry from '../../components/CardCountry/index'
import SearchInput from '../../components/SearchInput/index'
import { getCountry, getAllCountries } from '../../utils/api/countryApi';

const Home = () =>  {
  const [country, setCountry] = useState({})
  const [searchState, setSearchState] = useState({
    value: '',
    placeholder: 'search a country',
    list: [],
    all: []
  })

  const showCard = Object.keys(country).length > 0 ? true : false 

  const handleChange = e => {
    const inputValue = e.target.value || "";
    let newList = [...searchState.all]
    newList = newList.filter(item => {
      if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
        return item
      }
    })
    setSearchState({
      ...searchState,
      value: inputValue,
      list: inputValue === '' ? [...searchState.all] : newList
    })
  }

  const setValue = value => {
    setSearchState({
      ...searchState,
      value: value
    })

    getCountry(value)
    .then(data => {
      console.log(data);
      setCountry({
        ...data,
        languages: data.languages[0].name,
        currencies: data.currencies[0].name
      })
    })
    .catch(error => console.error(error))
  }
  
  useEffect(() => {
    getAllCountries()
      .then(data => {
        const countries = []
        data.map(country => 
          countries.push({ 
            name: country.name, 
            alpha3Code: country.alpha3Code,
            flag: country.flag 
          })
        )
        setSearchState({
          ...searchState,
          all: [...countries],
          list: [...countries]
        }) 
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="home__container">
      <div className="home__topContainer">
        <h1 className="home__title">Meet the world</h1>
        <SearchInput 
          {...searchState} 
          setCountry={setCountry}
          onPress={setValue} 
          onChange={handleChange}
        />
      </div>
      {showCard &&
        <CardCountry country={country}/>
      }
    </div>
  )
}

export default Home 