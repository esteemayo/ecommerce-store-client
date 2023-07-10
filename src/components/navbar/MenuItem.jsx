'use client';

import styled from 'styled-components';

const MenuItem = ({ label, onMouse }) => {
  return (
    <ListItem>
      <Button
        type='button'
        className='link-btn'
        onMouseOver={onMouse}
      >
        {label}
      </Button>
    </ListItem>
  );
};

const ListItem = styled.li``;

const Button = styled.button`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: capitalize;
  background-color: transparent;
  color: var(--clr-white);
  outline-color: var(--clr-primary-green);

  &:hover {
    opacity: 0.5;
  }
`;

export default MenuItem;
