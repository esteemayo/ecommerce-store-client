import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Link href='/' passHref>
        <Image
          src='/img/logo.png'
          width={100}
          height={100}
          priority
          alt=''
        />
      </Link>
    </div>
  );
}

export default Logo;
