import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const AccountUpload = ({ onOpen, currentUser }) => {
  return (
    <Container>
      <Wrapper>
        {!!currentUser ? (
          <StyledImage
            src='/img/user-9.jpg'
            width={100}
            height={100}
            alt=''
          />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
      </Wrapper>
      <Button type='button' onClick={onOpen}>
        Upload a picture
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #d5dae7;
  border-radius: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    font-size: 5rem;
    color: var(--clr-white);
  }
`;

const StyledImage = styled(Image)`
  width: 10rem;
  height: 10rem;
  display: block;
  object-fit: cover;
  border-radius: 3.5rem;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 1.2rem 3.5rem;
  background-color: var(--clr-primary-green);
  color: ${({ theme }) => theme.textBtn};
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
  transition: all 0.3s;

  @media only screen and (max-width: 43.75em) {
    padding: 1.2rem 2.5rem;
  }

  @media only screen and (max-width: 31.25em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &:hover {
    background-position: 100%;
  }
`;

AccountUpload.propTypes = {
  onOpen: PropTypes.func.isRequired,
  currentUser: PropTypes.bool.isRequired,
};

export default AccountUpload;
