import styled from 'styled-components';

const Search = () => {
  return (
    <Container>
      <Form>
        <Input
          type='search'
          placeholder='Search products...'
        />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  
`;

const Form = styled.form`
  
`;

const Input = styled.input`
  
`;

export default Search;
