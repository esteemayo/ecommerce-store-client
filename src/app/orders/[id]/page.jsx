'use client';
import styled from 'styled-components';
import Image from 'next/image';

const Order = () => {
  return (
    <Container>
      <Wrapper>
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
          <StatusWrapper>
            <Image
              src='/img/paid.png'
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
            />
          </StatusWrapper>
          <StatusWrapper>
            <Image
              src='/img/bake.png'
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
            />
          </StatusWrapper>
          <StatusWrapper>
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
            />
          </StatusWrapper>
        </StatusContainer>
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
  
`;

const StatusWrapper = styled.div`
  
`;

const Status = styled.span`
  
`;

export default Order;
