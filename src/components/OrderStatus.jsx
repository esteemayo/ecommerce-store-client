import styled from 'styled-components';
import Image from 'next/image';

const OrderStatus = ({ statusClass }) => {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.section`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 25em) {
    width: 90%;
  }
`;

const StatusWrapper = styled.div`
  img:first-child {
    width: 3rem;
    height: 3rem;
    display: block;
    object-fit: cover;
  }

  img:last-child {
    width: 2rem;
    height: 2rem;
    display: block;
  }
`;

const Status = styled.span``;

export default OrderStatus;
