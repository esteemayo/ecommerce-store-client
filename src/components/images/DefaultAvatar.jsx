'use client';

import styled from 'styled-components';

const DefaultAvatar = ({ name }) => {
  return (
    <Container>{name.charAt(0)}</Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export default DefaultAvatar;
