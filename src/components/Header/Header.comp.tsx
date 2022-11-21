import React from 'react';

import Link from 'next/link';

import { Image } from '../Image';
import { Text } from '../Text';

import {
  Wrapper,
  NavLeft,
  ContainerLogo,
  NavRight,
  Col,
  Title,
} from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = props => {
  const { title, counter = 0, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <NavLeft>
        <ContainerLogo>
          <Link href={'/'}>
            <Text color="white" weight="bold" size={20}>
              {title}
            </Text>
          </Link>
        </ContainerLogo>
      </NavLeft>
      <NavRight>
        <Link href={'/cart'}>
          <Col>
            <Title color="white" weight="semi-bold" size={14}>
              Meu Carrinho
            </Title>
            <Text color="#999999" weight="semi-bold" size={12} align="right">
              {counter} itens
            </Text>
          </Col>
        </Link>
        <Image
          src={require('../../assets/png/vector.png')}
          width={29}
          height={25}
          alt={'Logo carrinho'}
        />
      </NavRight>
    </Wrapper>
  );
};

Header.defaultProps = {
  elevation: 2,
};
