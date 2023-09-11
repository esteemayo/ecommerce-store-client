import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

export const useSubmenu = () => {
  const dispatch = useDispatch();

  const handleSubmenu = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  return {
    handleSubmenu,
  };
}
