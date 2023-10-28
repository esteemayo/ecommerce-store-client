import styled from 'styled-components';
import PropTypes from 'prop-types';

const UploadProgress = ({ type, percentage }) => {
  return (
    <Container type={type}>
      Uploading: {percentage}%
    </Container>
  );
}

const Container = styled.span`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  margin-top: ${({ type }) => !type && '2rem'};
`;

UploadProgress.propTypes = {
  type: PropTypes.bool,
  percentage: PropTypes.number.isRequired,
};

export default UploadProgress;
