import countries from 'world-countries';

const formatCountries = countries.map((item) => ({
  flag: item.flag,
  label: item.name.common,
  value: item.cca2,
}));

export const useCountries = () => {
  const getAll = () => formatCountries;

  return { getAll };
}
