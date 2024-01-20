import { useCallback, useEffect, useMemo, useState } from "react";
import { getAllCountries, getCountry } from "../utils/api/countryApi";
import parseCountryData from "../utils/functions/parseCountryData";

const useHome = () => {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const showCard = Boolean(Object.keys(country).length);

  const filteredCountries = useMemo(() => {
    if (query) {
      return countries.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return [];
    }
  }, [query, countries]);

  const handlerInputChange = (event) => setQuery(event.target.value);

  const setAllCountries = useCallback((data) => {
    if (Array.isArray(data)) {
      const allCountries = data.map(
        ({
          name: { common: name },
          cca3: alpha3Code,
          flags: { png: flag },
        }) => ({
          name,
          flag,
          alpha3Code,
        })
      );
      setCountries(allCountries);
    }
  }, []);

  const selectCountry = (name) => {
    setQuery("");
    getCountry(name)
      .then((data) => {
        setCountry(parseCountryData(data));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setAllCountries(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return {
    states: {
      query,
      country,
      showCard,
      filteredCountries,
    },
    setters: {
      setQuery,
      setCountry,
    },
    actions: {
      handlerInputChange,
      selectCountry,
    },
  };
};

export default useHome;
