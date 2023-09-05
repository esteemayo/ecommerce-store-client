import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

const ProductBox = ({ children, type }) => {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  return (
    <Container type={type} onMouseOver={handleClose}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: ${({ type }) => type && '15rem 0'};
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

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

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

ProductBox.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.bool,
};

export default ProductBox;
