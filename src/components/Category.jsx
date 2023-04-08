import Image from 'next/image';
import styled from 'styled-components';

const Category = () => {
  const images = [
    'https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/159643/laptop-ipad-organic-natural-159643.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <Container>
      <Image
        src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600'
        width={100}
        height={100}
        alt=''
      />
      <Wrapper>
        <MainHeading>Jeans</MainHeading>
        <SubHeading>100</SubHeading>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  box-shadow: -1px -1px 35px 3px rgba(0 ,0, 0, 0.17);
  -webkit-box-shadow: -1px -1px 35px 3px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: -1px -1px 35px 3px rgba(0, 0, 0, 0.17);
`;

const Wrapper = styled.div`
  
`;

const MainHeading = styled.h2`
  
`;

const SubHeading = styled.h3`
  
`;

export default Category;
