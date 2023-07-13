'use client';

import styled from 'styled-components';

const ProductButton = ({ actionLabel, onAction }) => {
  return (
    <Button type='button' onClick={onAction}>
      {actionLabel}
    </Button>
  );
}

const Button = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.8rem;
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.bgProdBtn};
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #333 50%
  );
  background-size: 220%;
  border: 1px solid var(--clr-black);
  border-radius: 0.5rem;
  outline-color: #777;
  line-height: 1.3em;
`;

export default ProductButton;
