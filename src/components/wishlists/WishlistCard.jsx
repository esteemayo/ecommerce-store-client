'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import { excerpts } from '@/utils';
import DeleteModal from '../modals/DeleteModal';

const WishlistCard = ({ isOpen, onOpen, selected, wishlists, onAction, onClose, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedId, setIsSelectedId] = useState(null);

  const handleOpenModal = useCallback((id) => {
    setIsSelectedId(id);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Container>
      {wishlists.map((wishlist) => {
        const { id, name, desc, images, price } = wishlist;
        return (
          <Wrapper key={id}>
            <Left>
              <ImageContainer>
                <Image
                  src={images ? images[0] : '/img/img-1.jpg'}
                  width={80}
                  height={80}
                  alt=''
                />
              </ImageContainer>
              <OverviewContainer>
                <ProductName>
                  <Link href={`/products/${encodeURIComponent(id)}`} passHref>
                    {name}
                  </Link>
                </ProductName>
                <Description>{excerpts(desc, 120)}</Description>
              </OverviewContainer>
            </Left>
            <Right>
              <CartContainer>
                <ProductPrice>
                  <NumericFormat
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </ProductPrice>
                <CartButton type='button' onClick={() => onAction(wishlist)}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Add to cart
                </CartButton>
              </CartContainer>
            </Right>
            <DeleteButton type='button' onClick={() => onOpen(id)}>
              <CloseIcon />
            </DeleteButton>
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
}

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

const Left = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media only screen and (max-width: 64em) {
    flex: 3;
  }

  @media only screen and (max-width: 37.5em) {
    flex: 1.5;
  }

  @media only screen and (max-width: 18.75em) {
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: #ede9e6;

  @media only screen and (max-width: 18.75em) {
    width: 6.5rem;
    height: 6.5rem;
  }

  img {
    display: block;
    width: 8rem;
    height: 8rem;
    object-fit: cover;

    @media only screen and (max-width: 18.75em) {
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`;

const OverviewContainer = styled.div``;

const ProductName = styled.h2`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.textWlCardName};
  margin-bottom: 0.5rem;
  line-height: 1;

  @media only screen and (max-width: 18.75em) {
    font-size: 1.6rem;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: currentColor;
      transition: all 0.3s ease;
      outline-color: #f1e4f4;
    }

    &:hover {
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.textWlCardName};
      text-underline-offset: 4px;
      color: currentColor;
    }
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textWlCard};
  line-height: 1.2;
  word-wrap: break-word;

  @media only screen and (max-width: 18.75em) {
    font-size: 1.4rem;
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 37.5em) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media only screen and (max-width: 37.5em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ProductPrice = styled.span`
  font-weight: 400;
  font-size: 2.23rem;
  color: ${({ theme }) => theme.textProdCard};

  @media only screen and (max-width: 18.75em) {
    font-size: 2rem;
  }
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 1rem 2rem;
  background-color: #6d857f;
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--clr-tertiary-green) 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #85beae;
  cursor: pointer;
  transition: all 0.3s ease;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.47rem;
    padding: 1rem 1.5rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.4rem;
    padding: 0.8rem 1rem;
  }

  &:hover {
    background-position: 100%;
  }

  svg {
    @media only screen and (max-width: 18.75em) {
      font-size: 1.3rem;
    }
  }
`;

const DeleteButton = styled.button`
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

WishlistCard.propTypes = {
  wishlists: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired
}

export default WishlistCard;
