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
  
`;

export default MenuItem;
