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
`;

export default MenuItem;
