'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { wishlists } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import WishlistCard from '@/components/WishlistCard';
import WishlistHeader from '@/components/WishlistHeader';
import CartModal from './CartModal';

const WishLists = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(wishlists);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <WishlistHeader />
        <WishlistCard
          wishlists={products}
          onDelete={handleDelete}
        />
      </Wrapper>
      <CartModal isModalOpen={isModalOpen} closeModal={setIsModalOpen} />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 10rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

export default WishLists;
