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
      <FilterListContainer>
        <FilterList>Newest</FilterList>
        <FilterList>Highest rating</FilterList>
        <FilterList>Lowest rating</FilterList>
      </FilterListContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
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

const FilterList = styled.li`
  
`;

export default ReviewFilter;
