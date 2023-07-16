'use client';

import styled from 'styled-components';

const ReviewButton = () => {
  return (
    <Button type='button'>ReviewButton</Button>
  );
}

const Button = styled.button`
  border: none;
  display: inline-block;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgRevBtn};
  color:  ${({ theme }) => theme.textRevBtn};
`;

export default ReviewButton;
