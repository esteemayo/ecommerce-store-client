import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSubmenu } from '@/hooks/useSubmenu';
import { StyledWrapper } from '../StyledWrapper';

const ProductBox = ({ children }) => {
  const closeSubmenu = useSubmenu((state) => state.closeSubmenu);

  return (
    <Container onMouseOver={closeSubmenu}>
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
