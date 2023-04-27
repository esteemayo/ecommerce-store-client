'use client';
import styled from 'styled-components';

const Products = () => {
  return (
    <Container>
      <FilterContainer>
        <FilterHeading>Filter by</FilterHeading>
        <Filter>
          <Label htmlFor='color'>Color</Label>
          <Select id='color'>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Pink</Option>
            <Option>Red</Option>
          </Select>
        </Filter>
        <Filter>
          <Label htmlFor='category'>Category</Label>
          <Select id='category'>
            <Option>Jeans</Option>
            <Option>Shirts</Option>
            <Option>Electronics</Option>
            <Option>Sneakers</Option>
            <Option>Gadgets</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
`;

const FilterContainer = styled.div`
  
`;

const FilterHeading = styled.h1`
  
`;

const Filter = styled.div`

`;

const Label = styled.label`
  
`;

const Select = styled.select`

`;

const Option = styled.option`
  
`;

export default Products;
