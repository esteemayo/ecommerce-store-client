import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {closeSidebar,  openSidebar } from '@/features/submenu/submenuSlice';

export const useSidebar = () => {
  const dispatch = useDispatch();

  const openSidebarHandler = useCallback(() => {
    dispatch(openSidebar());
  }, [dispatch]);

  const closeSidebarHandler = useCallback(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  return {
    openSidebarHandler,
    closeSidebarHandler,
  };
}
