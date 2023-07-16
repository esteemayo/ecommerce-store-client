'use client';

import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ReviewFilter = () => {
  return (
    <Container>
      <Wrapper className='filter-container'>
        <Filter>Sort:</Filter>
        <FilterText>Select</FilterText>
        <FilterIcon>
          <ArrowDropDownIcon />
        </FilterIcon>
      </Wrapper>
      <FilterListContainer></FilterListContainer>
    </Container>
  );
}

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  
`;

const Filter = styled.span`
  
`;

const FilterText = styled.span`
  
`;

const FilterIcon = styled.span`
  
`;

const FilterListContainer = styled.ul`
  
`;

export default ReviewFilter;
