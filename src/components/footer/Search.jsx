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
  background-color: var(--clr-white);
  border-radius: 0.5rem;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  
`;

export default Search;
