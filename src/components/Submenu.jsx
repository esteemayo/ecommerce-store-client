'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Submenu = () => {
  return (
    <Container type='show'>
      <Title>products</Title>
      <ListContainer>
        <ListItem>
          <Link href='/' passHref>
            <FontAwesomeIcon icon={faCartShopping} />
            &nbsp;
            products
          </Link>
        </ListItem>
        <ListItem>
          <Link href='/' passHref>
            <FontAwesomeIcon icon={faCartShopping} />
            &nbsp;
            products
          </Link>
        </ListItem>
        <ListItem>
          <Link href='/' passHref>
            <FontAwesomeIcon icon={faCartShopping} />
            &nbsp;
            products
          </Link>
        </ListItem>
        <ListItem>
          <Link href='/' passHref>
            <FontAwesomeIcon icon={faCartShopping} />
            &nbsp;
            products
          </Link>
        </ListItem>
      </ListContainer>
    </Container>
  );
}

const Container = styled.aside`
  padding: 2rem;
  width: 50rem;
  height: 40rem;
  background-color: #f4d4f5;
  border-radius: 1rem;
  position: absolute;
  left: 50%;
  top: 5rem;
  transform: translateX(-50%);
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 3000;

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid #f4d4f5;
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Title = styled.h4`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem 2rem;
`;

const ListItem = styled.li`

`;

export default Submenu;
