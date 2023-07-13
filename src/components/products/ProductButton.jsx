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
`;

export default ProductButton;
