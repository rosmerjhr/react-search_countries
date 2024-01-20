import React from 'react'
import './styles.css'
import CardCountry from '../../components/CardCountry/index'
import SearchInput from '../../components/SearchInput/index'
import useHome from '../../hooks/useHome'

const Home = () =>  {
  const { 
    states: { 
      query,
      country, 
      showCard,
      filteredCountries,
    }, 
    actions: { 
      handlerInputChange, 
      selectCountry 
    }, 
  } = useHome()

  console.log('country', country)

  return (
    <div className="home__container">
      <div className="home__topContainer">
        <h1 className="home__title">Meet the world</h1>
        <SearchInput 
          value={query}
          onPress={selectCountry} 
          onChange={handlerInputChange}
          filteredCountries={filteredCountries}
        />
      </div>
      {showCard &&
        <CardCountry country={country}/>
      }
    </div>
  )
}

export default Home 