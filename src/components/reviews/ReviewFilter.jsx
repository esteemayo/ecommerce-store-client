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
  width: 13rem;
  width: ${({ sort }) => (sort === 'highest' || sort === 'lowest') && '19rem'};
  color: ${({ theme }) => theme.text};
  padding: 2rem 0;
  padding-right: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Filter = styled.span`
  display: inline-block;
  font-size: 1.6rem;
  margin-right: 3px;

  @media only screen and (max-width: 26.875em) {
    font-size: 1.55rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.35rem;
  }
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
