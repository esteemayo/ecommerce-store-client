import { useCallback, useState } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    console.log(query);
  }, [query]);

  return {
    query,
    setQuery,
    handleSearch,
  };
}
