import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledWrapper } from '../StyledWrapper';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const ProductBox = ({ children }) => {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  return (
    <Container onMouseOver={handleClose}>
      <StyledWrapper>{children}</StyledWrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

ProductBox.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProductBox;
