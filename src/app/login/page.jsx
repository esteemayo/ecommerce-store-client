'use client';
import styled from 'styled-components';

import Loader from "@/components/Loader";

const login = () => {
  return (
    <Container>
      <Loader size='md' />
    </Container>
  );
}

const Container = styled.section`
  
`;

export default login;
