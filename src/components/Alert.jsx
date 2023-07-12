'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Alert = () => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div>Alert</div>
  );
}

const Message = styled.span`
  
`;

export default Alert;
