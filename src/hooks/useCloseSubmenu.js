import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

export const useCloseSubmenu = () => {
  const dispatch = useDispatch();

  const handleSubmenu = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  return {
    handleSubmenu,
  };
}
