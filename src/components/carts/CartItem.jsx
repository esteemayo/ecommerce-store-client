'use client';

import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import CartInfo from './CartInfo';
import CartCounter from './CartCounter';

import { remove, toggleQuantity } from '@/features/cart/cartSlice';

const CartItem = ({
  id,
  name,
  size,
  color,
  images,
  price,
  quantity
}) => {
  const dispatch = useDispatch();

  const handleRemove = useCallback((id) => {
    dispatch(remove(id))
  }, [dispatch]);

  const handleToggle = useCallback((type) => {
    dispatch(toggleQuantity({ type, id }));
  }, [id, dispatch]);

  return (
    <Container>
      <Wrapper>
        <CartInfo
          color={color}
          name={name}
          images={images}
          price={price}
          size={size}
          onAction={() => dispatch(remove(id))}
        />
        <CartCounter
          value={quantity}
          onIncrement={() => handleToggle('inc')}
          onDecrement={() => handleToggle('dec')}
        />
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  line-height: 1.12;
  
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.cartBorder};
    margin-bottom: 1.25rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  @media only screen and (max-width: 31.25em) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export default CartItem;
