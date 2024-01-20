const parseCountryData = (data) => {
  const {
    area,
    population,
    name: { common: name },
    capital: [capital],
    languages,
    currencies,
    flags: { png: flag },
  } = data;

  return {
    area,
    name,
    flag,
    capital,
    population,
    languages: Object.values(languages)[0],
    currencies: Object.values(currencies)[0].name,
  };
};

export default parseCountryData;
