import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    console.log({ searchQuery });
  }, [searchQuery]);

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <FormGroup>
          <Input
            type='search'
            value={searchQuery}
            placeholder='Search products...'
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type='submit'>Search</Button>
        </FormGroup>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  
`;

const Form = styled.form`
  
`;

const FormGroup = styled.div`
  
`;

const Input = styled.input`
  
`;

const Button = styled.button`
  
`;

export default Search;
