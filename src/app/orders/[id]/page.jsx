'use client';
import styled from 'styled-components';

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
            </Tr>
          </Tbody>
        </Table>
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
  
`;

const Thead = styled.thead`
  
`;

const Tr = styled.tr`
  
`;

const Th = styled.th`
  
`;

const Tbody = styled.tbody`
  
`;

const Td = styled.td`
  
`;

const OrderId = styled.span`
  
`;

const OrderName = styled.span`
  
`;

export default Order;
