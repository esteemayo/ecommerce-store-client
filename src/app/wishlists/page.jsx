'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { wishlists } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import WishlistCard from '@/components/WishlistCard';
import WishlistHeader from '@/components/WishlistHeader';
import CartModal from '@/components/CartModal';

const WishLists = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState(wishlists);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedProduct, setIsSelectedProduct] = useState({});

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  if (products.length < 1) {
    return (
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <Wrapper>
          <Text>Your wishlist is currently empty!</Text>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <WishlistHeader />
        <WishlistCard
          wishlists={products}
          onDelete={handleDelete}
          openModal={setIsModalOpen}
          setIsSelectedProduct={setIsSelectedProduct}
        />
      </Wrapper>
      <CartModal
        isModalOpen={isModalOpen}
        closeModal={setIsModalOpen}
        product={isSelectedProduct}
        setIsSelectedProduct={setIsSelectedProduct}
      />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 10rem 0;

  @media only screen and (max-width: 64em) {
    padding: 8rem 0;
  }

  @media only screen and (max-width: 56.25em) {
    padding: 5rem 3rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;

  @media only screen and (max-width: 56.25em) {
    max-width: 100rem;
  }
`;

const Text = styled.p`
  font-size: 4rem;
  text-align: center;
`;

export default WishLists;
