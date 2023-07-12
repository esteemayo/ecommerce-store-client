'use client';

import styled from 'styled-components';
import { useEffect } from 'react';

const Alert = ({ alert, message, onChange }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert, onChange]);

  return <Message>{message}</Message>;
}

const Message = styled.span`
  
`;

export default Alert;
