import countries from 'world-countries';

const formatCountries = countries.map((item) => ({
  label: item.name.common,
  flag: item.flag,
}));

export const useCountries = () => {
  const getAll = () => formatCountries;

  return { getAll };
}
