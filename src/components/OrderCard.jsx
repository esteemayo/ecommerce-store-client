import styled from 'styled-components';

const OrderCard = () => {
  return (
    <Container>
      OrderCard
    </Container>
  );
}

const Container = styled.article`
  width: 30%;
  border-radius: 1rem;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);

  &::before {
    content: '';
    display: block;
    width: 95%;
    height: 2px;
    margin: 0 auto;
    background-color: ${({ status }) => status === 0 && 'var(--clr-primary-red)'};
    background-color: ${({ status }) => status === 1 && '#ffb900'};
    background-color: ${({ status }) => status === 2 && 'var(--clr-secondary-green)'};
    border-radius: 1rem;
  }
`;

export default OrderCard;
