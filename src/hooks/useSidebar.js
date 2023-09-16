import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {closeSidebar,  openSidebar } from '@/features/submenu/submenuSlice';

export const useSidebar = () => {
  const dispatch = useDispatch();

  const openSidebarHandler = useCallback(() => {
    dispatch(openSidebar());
  }, [dispatch]);

  return (
    <div>useSidebar</div>
  );
}
