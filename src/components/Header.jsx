import styled from 'styled-components';

const Header = ({ title }) => {
  return (
    <Heading>{title}</Heading>
  );
}

const Heading = styled.h1`
  font-family: inherit;
  font-weight: 600;
  color: var(--clr-secondary-green);
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
`;

export default Header;
