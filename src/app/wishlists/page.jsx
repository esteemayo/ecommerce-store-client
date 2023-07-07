'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { wishlists } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import WishlistCard from '@/components/wishlists/WishlistCard';
import WishlistHeader from '@/components/wishlists/WishlistHeader';
import CartModal from '@/components/modals/CartModal';

const WishLists = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(wishlists);
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
  background-color: ${({ theme }) => theme.bg};

  @media only screen and (max-width: 64em) {
    padding: 8rem 0;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 23.75em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }
`;

const Text = styled.p`
  font-size: 4rem;
  text-align: center;
  color: ${({ theme }) => theme.textCartHeader};

  @media only screen and (max-width: 37.5em) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 26.25em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2rem;
  }
`;

export default WishLists;
