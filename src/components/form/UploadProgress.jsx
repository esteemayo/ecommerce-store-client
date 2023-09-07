import styled from 'styled-components';
import PropTypes from 'prop-types';

const UploadProgress = ({ percentage }) => {
  return (
    <Container>
      Uploading: {percentage}%
    </Container>
  );
}

const Container = styled.span`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
`;

UploadProgress.propTypes = {
  percentage: PropTypes.number,
};

export default UploadProgress;
