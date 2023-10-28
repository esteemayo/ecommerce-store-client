'use client';

import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

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
  quantity,
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
          id={id}
          color={color}
          name={name}
          images={images}
          price={price}
          size={size}
          onAction={handleRemove}
        />
        <CartCounter
          value={quantity}
          onIncrement={handleToggle}
          onDecrement={handleToggle}
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

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;