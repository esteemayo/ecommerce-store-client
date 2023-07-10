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
  
`;

export default ToggleButton;
