import { useCallback, useState } from 'react';
import { getFromStorage, searchKey, setToStorage } from '@/utils';

const getAllHistories = () => {
  const histories = getFromStorage(searchKey);
  return histories ?? [];
};

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [histories, setHistories] = useState(getAllHistories());

  const handleChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleDelete = useCallback((id) => {
    setHistories((prev) => [...prev].filter((item) => item.id !== id));
  }, []);

  const handleHistory = useCallback(() => {
    const data = {
      id: new Date().getTime(),
      query: searchQuery,
    };

    setHistories((prev) => [data, ...prev]);
  }, [searchQuery]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();

    handleHistory();
    console.log(searchQuery);
  }, [handleHistory, searchQuery]);

  useEffect(() => {
    setToStorage(searchKey, histories);
  }, [histories]);

  return {
    searchQuery,
    handleChange,
    handleDelete,
    handleSearch,
  };
}
