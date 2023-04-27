'use client';
import styled from 'styled-components';

const Products = () => {
  return (
    <Container>
      <FilterContainer>
        <FilterHeading>Filter by</FilterHeading>
        <FilterWrapper>
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
              <SizeInput type='number' name='size' id='size' value={0} />
              <SizeInput type='number' name='size' id='size' value={100} />
            </SizeInputs>
          </Filter>
        </FilterWrapper>
      </FilterContainer>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
`;

const FilterContainer = styled.div`
  padding: 5rem 0;
  width: 65%;
  margin: 0 auto;
`;

const FilterHeading = styled.h1`
  
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
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

const SizeInput = styled.input`

`;

export default Products;
