import React from 'react';

import { Button } from '@components/Button';

import currency from '../../utils/currency';
import { Image } from '../Image';
import { Text } from '../Text';

import { Body, Wrapper, Title, Description, Row, Footer } from './Card.styles';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = props => {
  const {
    title,
    image,
    onSubmit,
    onClick,
    value,
    counter = 0,
    titleButton = 'ADICIONAR AO CARRINHO',
    colorButton = '#009EDD',
    ...rest
  } = props;

  return (
    <Wrapper
      {...Object.assign({ ...rest })}
      flexDirection={'column'}
      onClick={onClick}>
      <Body>
        <Image src={image} alt={'Image'} width={147} height={188} />
        <Description>
          <Title size={12} weight="bold" align="center" height={16}>
            {title}
          </Title>
          <Text size={16} weight="bold" align="center">
            {currency(value)}
          </Text>
        </Description>
        <Footer>
          <Button
            block
            shape="bordered"
            variant="contained"
            onClick={onSubmit}
            color={colorButton}
            fontColor="white">
            <Row>
              <div>
                <Image
                  src={require('../../assets/png/cart.png')}
                  alt={'Image'}
                  width={11}
                  height={11}
                />
                <Text size={12} color={'white'} align="center">
                  {counter}
                </Text>
              </div>
              <Text size={12} color={'white'} weight="bold" align="center">
                {titleButton}
              </Text>
            </Row>
          </Button>
        </Footer>
      </Body>
    </Wrapper>
  );
};
