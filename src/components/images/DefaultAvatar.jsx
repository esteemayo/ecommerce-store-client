'use client';

import styled from 'styled-components';

const DefaultAvatar = ({ name }) => {
  return (
    <Container>{name.charAt(0)}</Container>
  );
}

const Container = styled.div`
  
`;

export default DefaultAvatar;
