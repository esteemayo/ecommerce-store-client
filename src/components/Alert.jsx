'use client';

import styled from 'styled-components';
import { useEffect } from 'react';

const Alert = ({ alert, center, message, onChange }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert, onChange]);

  return (
    <Message center={center}>
      {message}
    </Message>
  );
}

const Message = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #409384;
  text-align: ${({ center }) => center ? 'center' : 'left'};
`;

export default Alert;
