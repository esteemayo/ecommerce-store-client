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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 2rem 2.5rem;
`;

const HeadingContainer = styled.div`
  line-height: 1.1;
`;

const Heading = styled.h1`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.8rem;
`;

const Date = styled.time`
  font-size: 1.5rem;
  color: #999;
`;

const SendButton = styled.button`
  border: none;
  display: inline-block;
  text-transform: capitalize;
  padding: 1rem 3rem;
  background-color: var(--clr-white);
  color: #89a8a0;
  border-radius: 0.5rem;
  outline-color: #ccc;
  cursor: pointer;
`;

const CardContainer = styled.div`
  padding: 1rem 2.5rem;
`;

export default WishLists;
