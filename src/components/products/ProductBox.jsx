import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

import { StyledWrapper } from '../StyledWrapper';
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
