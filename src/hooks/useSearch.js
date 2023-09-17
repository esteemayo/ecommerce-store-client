import { useCallback, useState } from 'react';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    console.log(searchQuery);
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
}
