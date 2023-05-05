import styled from 'styled-components';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import StarRating from './StarRating';
import ReviewModal from './ReviewModal';
import { reviewItems } from '@/data';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const [sort, setSort] = useState('newest');
  const [reviews, setReviews] = useState(reviewItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <Container id='reviews'>
      <Wrapper>
        <Heading>Reviews</Heading>
        <ReviewContainer>
          <Ratings>
            {reviews.length && <TotalRatings>5.0</TotalRatings>}
            <StarRating value={0} />
            <TotalReviews>{reviews.length} reviews</TotalReviews>
          </Ratings>
          <FilterWrapper>
            <FilterContainer onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <Filter>Sort:</Filter>
              <FilterText>Select</FilterText>
              <FilterIcon>
                <ArrowDropDownIcon />
              </FilterIcon>
            </FilterContainer>
            <FilterList type={isFilterOpen ? 'show' : ''}>
              <ListCategory>Newest</ListCategory>
              <ListCategory>Highest rating</ListCategory>
              <ListCategory>Lowest rating</ListCategory>
            </FilterList>
          </FilterWrapper>
        </ReviewContainer>
        <ReviewsWrapper>
          {reviews.length > 0 ? (
            <>
              <ReviewButtonWrapper>
                <ReviewButton
                  type='button'
                  onClick={() => setIsModalOpen(true)}
                >
                  Leave a review
                </ReviewButton>
              </ReviewButtonWrapper>
              <ReviewCardContainer>
                {reviews.map((item) => {
                  return <ReviewCard key={item.id} {...item} />;
                })}
              </ReviewCardContainer>
            </>
          ) : (
            <EmptyReview>
              <StarRating value={5} />
              <Message>Currently, there are no reviews for this product.</Message>
              <ReviewButton
                type='button'
                onClick={() => setIsModalOpen(true)}
              >
                Leave a review
              </ReviewButton>
            </EmptyReview>
          )}
        </ReviewsWrapper>
      </Wrapper>
      <ReviewModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  background-color: var(--clr-white);
  padding-bottom: 4rem;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 4rem;
  background-color: #f4f8f7;
`;

const Heading = styled.h1`
  display: inline-block;
  width: 100%;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.2rem;
`;

const ReviewContainer = styled.div`
  padding: 3rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;

  svg {
    font-size: 3rem;
    color: #89a8a0;
  }
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const TotalRatings = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.2rem;
`;

const TotalReviews = styled.span`
  display: inline-block;
  font-weight: normal;
  font-size: 1.8rem;
  color: inherit;
  line-height: 1.8rem;
`;

const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const FilterContainer = styled.div`
  width: 13rem;
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
`;

const FilterText = styled.span`
  display: inline-block;
  font-size: 1.6rem;
  cursor: pointer;
`;

const FilterIcon = styled.span`
  padding-left: 0.5rem;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  svg {
    font-size: 2rem;
    fill: #89a8a0;
  }
`;

const FilterList = styled.ul`
  position: absolute;
  right: ${({ type }) => type === 'show' ? 0 : '-30rem'};
  top: 6rem;
  list-style: none;
  width: 20rem;
  padding: 0.4rem;
  text-align: left;
  background-color: var(--clr-white);
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  transform: scale(${({ type }) => type === 'show' ? 1 : 0});
  z-index: ${({ type }) => type === 'show' ? 1000 : -1};
  transition: all 0.3s linear;
`;

const ListCategory = styled.li`
  display: block;
  text-transform: capitalize;
  font-size: 1.3rem;
  width: 100%;
  padding: 0.7rem 0.9rem 0.9rem 1.2rem;
  object-fit: contain;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const ReviewsWrapper = styled.div`
  padding: 5rem 0 0.5rem 0;
  border-top: 1px solid #e2e9e7;
  position: relative;
`;

const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const EmptyReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;

  svg {
    font-size: 2.5rem;
    fill: #89a8a0;
    margin-right: 0.5rem;
  }
`;

const Message = styled.span`
  color: inherit;
`;

const ReviewButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
`;

const ReviewButton = styled.button`
  border: none;
  display: inline-block;
  padding: 1rem;
  background-color: #e2e9e7;
  color: #89a8a0;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #eaf7f3 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #89a8a0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-position: 100%;
  }
`;

export default Reviews;
