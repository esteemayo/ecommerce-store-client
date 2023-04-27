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
        <Filter>
          <Label htmlFor='price'>Product price</Label>
          <Input type='range' id='price' min={0} max={900} />
        </Filter>
        <Filter>
          <Label htmlFor='size'>Product size</Label>
          <SizeInputs>

          </SizeInputs>
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

const Input = styled.input`
  
`;

const SizeInputs = styled.div`
  
`;

export default Products;
