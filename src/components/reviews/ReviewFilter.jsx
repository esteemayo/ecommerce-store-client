'use client';

import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PropTypes from 'prop-types';

const ReviewFilter = ({ sort, value, isOpen, onClick, onSort }) => {
  return (
    <Container className='filter-container'>
      <Wrapper
        sort={sort}
        className='filter-wrapper'
        onClick={onClick}
      >
        <Filter>Sort:</Filter>
        <FilterText>{value ?? 'Select'}</FilterText>
        <FilterIcon>
          <ArrowDropDownIcon />
        </FilterIcon>
      </Wrapper>
      <FilterListContainer type={isOpen ? 'show' : ''}>
        <FilterList onClick={() => onSort('newest')}>Newest</FilterList>
        <FilterList onClick={() => onSort('highest')}>Highest rating</FilterList>
        <FilterList onClick={() => onSort('lowest')}>Lowest rating</FilterList>
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
  width: ${({ sort }) => (sort === 'highest' || sort === 'lowest') && '20rem'};
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
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.6rem;
  cursor: pointer;

  @media only screen and (max-width: 26.875em) {
    font-size: 1.55rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.35rem;
  }
`;

const FilterIcon = styled.span`
  padding-left: 0.5rem;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  svg {
    font-size: 2rem;
    fill: ${({ theme }) => theme.star};
  }
`;

const FilterListContainer = styled.ul`
  position: absolute;
  right: ${({ type }) => type === 'show' ? 0 : '-30rem'};
  top: 6rem;
  list-style: none;
  width: 20rem;
  padding: 0.4rem;
  text-align: left;
  background-color: ${({ theme }) => theme.bgProdCard};
  border: 1px solid ${({ theme }) => theme.filterBorder};
  border-radius: 3px;
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  transform: scale(${({ type }) => type === 'show' ? 1 : 0});
  z-index: ${({ type }) => type === 'show' ? 1000 : -1};
  transition: all 0.3s linear;
`;

const FilterList = styled.li`
  display: block;
  text-transform: capitalize;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 0.7rem 0.9rem 0.9rem 1.2rem;
  object-fit: contain;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.filterHov};
  }
`;

ReviewFilter.propTypes = {
  sort: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default ReviewFilter;
