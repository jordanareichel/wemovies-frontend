import React from 'react';

import { Container, Paragraphy } from './Text.styles';
import { TextProps } from './Text.types';

export const TextContainer: React.FC<TextProps> = props => {
  const { children, ...rest } = props;

  return (
    <Container>
      {React.Children.map(children, (child, index) => {
        return <Text key={index} {...Object.assign({ children, ...rest })} />;
      })}
    </Container>
  );
};

export const Text: React.FC<TextProps> = props => {
  return <Paragraphy {...props} />;
};
