'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { wishlists } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import WishlistCard from '@/components/WishlistCard';
import WishlistHeader from '@/components/WishlistHeader';

const WishLists = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(wishlists);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <WishlistHeader />
        <CardContainer>
          {products.map((wishlist) => {
            return (
              <WishlistCard
                {...wishlist}
                key={wishlist.id}
                onDelete={handleDelete}
              />
            );
          })}
        </CardContainer>
      </Wrapper>
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

const CardContainer = styled.div`
  padding: 1rem 2.5rem;
`;

export default WishLists;
