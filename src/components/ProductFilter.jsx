import styled from 'styled-components';

const getUnique = (items, value) => {
  const tempItems = items.map((item) => item[value]).flat();
  return [...new Set(tempItems)];
};

const ProductFilter = ({ products, category, size, color, minPrice, maxPrice, handleChange }) => {
  let colors = getUnique(products, 'color');
  colors = colors.map((color, index) => {
    return (
      <Option key={index} value={color}>
        {color}
      </Option>
    );
  });

  let categories = ['all', ...getUnique(products, 'category')];
  categories = categories.map((category, index) => {
    return (
      <Option key={index} value={category}>
        {category}
      </Option>
    );
  });

  return (
    <Container>
      <FilterHeading>Filter by</FilterHeading>
      <FilterWrapper>
        <Filter>
          <Label htmlFor='color'>Color</Label>
          <Select id='color' name='color' onChange={handleChange}>
            {colors}
          </Select>
        </Filter>
        <Filter>
          <Label htmlFor='category'>Category</Label>
          <Select id='category' name='category' onChange={handleChange}>
            {categories}
          </Select>
        </Filter>
        <Filter>
          <Label htmlFor='price'>Product price</Label>
          <Input
            id='price'
            name='price'
            type='range'
            min={minPrice}
            max={maxPrice}
          />
        </Filter>
        <Filter>
          <Label htmlFor='size'>Product size</Label>
          <SizeInputs>
            <SizeInput type='number' name='size' id='size' />
            <SizeInput type='number' name='size' id='size' />
          </SizeInputs>
        </Filter>
      </FilterWrapper>
    </Container>
  );
}

const Container = styled.section`
  padding: 7rem 0;
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
`;

const FilterHeading = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.6rem;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  display: inline-block;
  text-transform: capitalize;
  width: 20rem;
  padding: 3px;
  font-size: 1.4rem;
  background-color: transparent;
  color: #999;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: #eee;
`;

const Option = styled.option`
  background-color: var(--clr-white);
  color: inherit;
`;

const Input = styled.input`
  display: inline-block;
  width: 20rem;
  padding: 3px;
  font-size: 1.4rem;
  background-color: transparent;
  color: #999;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: #eee;
`;

const SizeInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SizeInput = styled.input`
  display: inline-block;
  width: 8rem;
  padding: 3px;
  font-size: 1.4rem;
  background-color: transparent;
  color: #999;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: #eee;
`;

export default ProductFilter;
