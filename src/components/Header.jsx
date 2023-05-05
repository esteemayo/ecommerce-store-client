import styled from 'styled-components';

const Header = ({ title }) => {
  return (
    <Heading>{title}</Heading>
  );
}

const Heading = styled.h1`
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
`;

export default Header;
