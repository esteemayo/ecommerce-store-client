'use client';
import styled from 'styled-components';
import Image from 'next/image';

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return 'done';
    if (index - status === 1) return 'inProgress';
    if (index - status > 1) return 'undone';
  };

  return (
    <Container>
      <Wrapper>
        <OrderContainer>
          <Left>
            <Table>
              <Thead>
                <Tr>
                  <Th>Order ID</Th>
                  <Th>Customer</Th>
                  <Th>Address</Th>
                  <Th>Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <OrderId>63deb1d1a79fe9e5f5a46325</OrderId>
                  </Td>
                  <Td>
                    <OrderName>Mary Doe</OrderName>
                  </Td>
                  <Td>
                    <OrderAddress>Lagos,Nigeria</OrderAddress>
                  </Td>
                  <Td>
                    <OrderTotal>$420</OrderTotal>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <StatusContainer>
              <StatusWrapper className={statusClass(0)}>
                <Image
                  src='/img/paid.png'
                  width={30}
                  height={30}
                  alt=''
                />
                <Status>Payment</Status>
                <Image
                  src='/img/checked.png'
                  width={20}
                  height={20}
                  alt=''
                  className='checkedIcon'
                />
              </StatusWrapper>
              <StatusWrapper className={statusClass(1)}>
                <Image
                  src='/img/bake.png'
                  width={30}
                  height={30}
                  alt=''
                />
                <Status>Preparing</Status>
                <Image
                  src='/img/checked.png'
                  width={20}
                  height={20}
                  alt=''
                  className='checkedIcon'
                />
              </StatusWrapper>
              <StatusWrapper className={statusClass(2)}>
                <Image
                  src='/img/bike.png'
                  width={30}
                  height={30}
                  alt=''
                />
                <Status>On the way</Status>
                <Image
                  src='/img/checked.png'
                  width={20}
                  height={20}
                  alt=''
                  className='checkedIcon'
                />
              </StatusWrapper>
              <StatusWrapper className={statusClass(3)}>
                <Image
                  src='/img/delivered.png'
                  width={30}
                  height={30}
                  alt=''
                />
                <Status>Delivered</Status>
                <Image
                  src='/img/checked.png'
                  width={20}
                  height={20}
                  alt=''
                  className='checkedIcon'
                />
              </StatusWrapper>
            </StatusContainer>
          </Left>
          <Right>
            <RightWrapper>
              <Heading>cart total</Heading>
              <TotalContainer>
                <TotalText>Subtotal:</TotalText>
                $99.99
              </TotalContainer>
              <TotalContainer>
                <TotalText>Discount:</TotalText>
                $0.00
              </TotalContainer>
              <TotalContainer>
                <TotalText>Total:</TotalText>
                $88.90
              </TotalContainer>
              <Button type='button' disabled>Paid</Button>
            </RightWrapper>
          </Right>
        </OrderContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 8rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

const OrderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
`;

const Left = styled.div`
  flex: 2;
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-bottom: 5rem;
`;

const Thead = styled.thead`
  
`;

const Tr = styled.tr`
  
`;

const Th = styled.th`
  font-weight: 600;
  font-size: 1.7rem;
`;

const Tbody = styled.tbody`
  
`;

const Td = styled.td`
  font-size: 1.5rem;
`;

const OrderId = styled.span`
  display: inline-block;
  text-transform: uppercase;
`;

const OrderName = styled.span`
  
`;

const OrderAddress = styled.span`
  
`;

const OrderTotal = styled.span`
  
`;

const StatusContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatusWrapper = styled.div``;

const Status = styled.span``;

const Right = styled.div`
  flex: 1;
`;

const RightWrapper = styled.div`
  width: 90%;
  background-color: #555;
  color: var(--clr-white);
  padding: 5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.h2`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TotalText = styled.b`
  
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  text-transform: capitalize;
  padding: 1.35rem 3rem;
`;

export default Order;
