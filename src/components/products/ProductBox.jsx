import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledWrapper } from '../StyledWrapper';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import { useCloseSubmenu } from '@/hooks/useCloseSubmenu';

const ProductBox = ({ children }) => {
  const { handleSubmenu } = useCloseSubmenu();

  return (
    <Container onMouseOver={handleSubmenu}>
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
