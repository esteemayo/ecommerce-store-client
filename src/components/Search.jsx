import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
            placeholder='Search for a product'
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </FormGroup>
        <Button type='submit'>Search</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 0;
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
