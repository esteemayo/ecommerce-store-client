'use client';

import styled from 'styled-components';

const Search = () => {
  return (
    <Container>
      <Input type='search' placeholder='Search store...' />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const Input = styled.input`
  
`;

export default Search;
