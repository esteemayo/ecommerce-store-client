import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { closeSubmenu, openSubmenu } from '@/features/submenu/submenuSlice';

export const useSubmenu = () => {
  const dispatch = useDispatch();

  const openSubmenuHandler = useCallback((submenu) => {
    dispatch(openSubmenu(submenu));
  }, [dispatch]);

  const handleSubmenu = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  return {
    handleSubmenu,
    openSubmenuHandler,
  };
}