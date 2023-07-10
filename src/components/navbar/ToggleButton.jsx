'use client';

import styled from 'styled-components';

const ToggleButton = ({ icon: Icon, onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      <Icon />
    </Button>
  );
}

const Button = styled.button`
  display: inline-block;
  border: none;
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  color: var(--clr-white);
  margin-right: 2rem;
  transition: all 0.5s ease;

  &:hover {
    transform: rotate(90deg);
  }

  svg {
    width: 3rem;
    height: 3rem;
    fill: inherit;
  }
`;

export default ToggleButton;
