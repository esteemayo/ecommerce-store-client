import styled from 'styled-components';
import PropTypes from 'prop-types';

const UploadProgress = ({ perecentage }) => {
  return (
    <Container>Uploading: {perecentage}%</Container>
  );
}

const Container = styled.span`
  
`;

export default UploadProgress;
