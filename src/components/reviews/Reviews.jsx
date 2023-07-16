'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ReviewCard from './ReviewCard';
import EmptyReview from './EmptyReview';

import StarRating from '../StarRating';
import ReviewModal from '../modals/ReviewModal';

import { reviewItems } from '@/data';
import ReviewHead from './ReviewHead';

const Reviews = () => {
  const [sort, setSort] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState(reviewItems);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleToggleFilter = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, []);

  const handleCloseFilter = useCallback(() => {
    const reviewsEl = document.querySelector('.reviews');
    const filterEl = document.querySelector('.filter-container');

    reviewsEl.addEventListener('click', () => setIsFilterOpen(false));
    filterEl.addEventListener('click', () => setIsFilterOpen(true));

    return () => {
      reviewsEl.removeEventListener('click', () => setIsFilterOpen(false));
      filterEl.removeEventListener('click', () => setIsFilterOpen(true));
    };
  }, []);

  const getSort = useMemo(() => {
    if (sort === 'newest') return 'newest';
    if (sort === 'highest') return 'highest rating';
    if (sort === 'lowest') return 'lowest rating';
  }, [sort]);

  useEffect(() => {
    if (sort === 'newest') {
      setReviews((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }

    if (sort === 'highest') {
      setReviews((prev) =>
        [...prev].sort((a, b) => b.rating - a.rating)
      );
    }

    if (sort === 'lowest') {
      setReviews((prev) =>
        [...prev].sort((a, b) => a.rating - b.rating)
      );
    }
  }, [sort]);

  return (
    <Container id='reviews' className='reviews' onClick={handleCloseFilter}>
      <Wrapper>
        <Heading>Reviews</Heading>
        <ReviewHead
          sort={sort}
          sortLabel={getSort}
          rating={0}
          reviews={reviews}
          isOpen={isFilterOpen}
          onOpen={handleOpenModal}
          onSort={setSort}
          onToggle={handleToggleFilter}
        />
        <ReviewsWrapper>
          {reviews.length > 0 ? (
            <ReviewCardContainer>
              {reviews.map((item) => {
                return <ReviewCard key={item.id} {...item} />;
              })}
            </ReviewCardContainer>
          ) : (
            <EmptyReview
              rating={5}
              onClick={handleOpenModal}
            />
          )}
        </ReviewsWrapper>
      </Wrapper>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.bgLight};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 6rem 0;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 26.875em) {
    padding-bottom: 3rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Heading = styled.h1`
  display: inline-block;
  width: 100%;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.textProdHeader};
  line-height: 3.2rem;
`;

const ReviewContainer = styled.div`
  padding: 3rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.star};

    @media only screen and (max-width: 26.875em) {
      font-size: 2.65rem;
    }

    @media only screen and (max-width: 18.75em) {
      font-size: 2.45rem;
    }
  }
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 26.875em) {
    margin-bottom: 2rem;
  }
`;

const TotalRatings = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.text};
  line-height: 3.2rem;

  @media only screen and (max-width: 26.875em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2.8rem;
  }
`;

const TotalReviews = styled.span`
  display: inline-block;
  font-weight: normal;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.8rem;

  @media only screen and (max-width: 26.875em) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.4rem;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
`;

const ReviewsWrapper = styled.div`
  padding: 5rem 0 0.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.cartBorder};
  position: relative;

  @media only screen and (max-width: 26.875em) {
    padding-top: 3rem;
  }
`;

const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const ReviewButtonWrapper = styled.div``;

export default Reviews;
