import styled from 'styled-components';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const OrderStatus = ({ statusClass }) => {
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

  return (
    <Container>
      <StatusWrapper className={statusClass(0)} darkMode={darkMode}>
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
      <StatusWrapper className={statusClass(1)} darkMode={darkMode}>
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
      <StatusWrapper className={statusClass(2)} darkMode={darkMode}>
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
      <StatusWrapper className={statusClass(3)} darkMode={darkMode}>
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
    background-color: ${({ darkMode }) => darkMode && '#1b1a1a'};
  }

  img:last-child {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }
`;

const Status = styled.span`
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 37.5em) {
    font-size: 1.5rem;
  }
`;

export default OrderStatus;
