import styled from 'styled-components';
import PropTypes from 'prop-types';

const UploadProgress = ({ perecentage }) => {
  return (
    <Container>
      Uploading: {perecentage}%
    </Container>
  );
}

const Container = styled.span`
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
`;

export default UploadProgress;
