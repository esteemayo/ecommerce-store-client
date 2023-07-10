'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';

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
