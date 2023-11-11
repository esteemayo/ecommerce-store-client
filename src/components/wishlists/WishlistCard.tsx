'use client';

import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

import WishlistInfo from './WishlistInfo';
import CloseButton from './CloseButton';
import WishlistPrice from './WishlistPrice';

import { excerpts } from '@/utils';
import { WishlistCardProps } from '@/types';

import DeleteModal from '../modals/DeleteModal';

const WishlistCard = ({
  isOpen,
  onOpen,
  selected,
  wishlists,
  onAction,
  onClose,
  onDelete,
}: WishlistCardProps) => {
  return (
    <Container>
      {wishlists.map((wishlist) => {
        const { id, name, desc, images, price } = wishlist;
        return (
          <Wrapper key={id}>
            <WishlistInfo
              id={id}
              desc={desc}
              name={name}
              image={images?.[0]}
              excerpts={excerpts}
            />
            <WishlistPrice
              price={price}
              wishlist={wishlist}
              onAction={onAction}
            />
            <CloseButton id={id} onOpen={onOpen} />
          </Wrapper>
        );
      })}
      <DeleteModal
        actionId={selected}
        isOpen={isOpen}
        onAction={onDelete}
        onClose={onClose}
      />
    </Container>
  );
};

const Container = styled.article`
  padding: 1rem 2.5rem;

  @media only screen and (max-width: 31.25em) {
    padding: 1rem 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding: 3rem;
  background-color: ${({ theme }) => theme.bgWlCard};
  box-shadow: ${({ theme }) => theme.boxWlCard};
  -webkit-box-shadow: ${({ theme }) => theme.boxWlCard};
  -moz-box-shadow: ${({ theme }) => theme.boxWlCard};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media only screen and (max-width: 37.5em) {
    padding: 2rem;
    flex-direction: column;
  }

  @media only screen and (max-width: 18.75em) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 3rem;
  display: inline-block;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: lighter;
  font-size: 2rem;
  background-color: transparent;
  color: #d2d3d2;
  outline-color: #f1e4f4;
  cursor: pointer;

  @media only screen and (max-width: 37.5em) {
    right: 1.5rem;
  }

  @media only screen and (max-width: 18.75em) {
    top: 1px;
    right: 1rem;
  }

  svg {
    font-weight: inherit;
    font-size: 2rem;
    fill: currentColor;
  }
`;

export default WishlistCard;
