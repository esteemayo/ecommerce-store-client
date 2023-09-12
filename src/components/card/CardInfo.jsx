import styled from 'styled-components';
import Link from 'next/link';

const CardInfo = () => {
  return (
    <Container>
      CardInfo
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  background-color: inherit;
  border-radius: 0.5rem;

  @media only screen and (max-width: 35em) {
    padding: 1rem;
  }
`;

export default CardInfo;
