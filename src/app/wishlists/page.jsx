'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import CartModal from '@/components/modals/CartModal';
import WishlistHeader from '@/components/wishlists/WishlistHeader';
import ClientOnly from '@/components/ClientOnly';
import WishlistCard from '@/components/wishlists/WishlistCard';

import { wishlists } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const WishLists = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(wishlists);
  const [isSelectedProduct, setIsSelectedProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectedId, setIsSelectedId] = useState(null);

  const handleClick = useCallback((wishlist) => {
    setIsModalOpen(true);
    setIsSelectedProduct(wishlist);
  }, [setIsModalOpen, setIsSelectedProduct]);

  const closeModalHandler = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleOpenModal = useCallback((id) => {
    setIsSelectedId(id);
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleDelete = useCallback((id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  let bodyContent;

  if (products.length < 1) {
    bodyContent = <Text>Your wishlist is currently empty!</Text>;
  }

  if (products.length > 0) {
    bodyContent = (
      <>
        <WishlistHeader />
        <WishlistCard
          isOpen={isOpen}
          onOpen={handleOpenModal}
          selected={isSelectedId}
          wishlists={products}
          onAction={handleClick}
          onClose={handleCloseModal}
          onDelete={handleDelete}
        />
      </>
    );
  }

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        {bodyContent}
      </Wrapper>
      <CartModal
        product={isSelectedProduct}
        isOpen={isModalOpen}
        onClose={closeModalHandler}
        onSelect={setIsSelectedProduct}
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
