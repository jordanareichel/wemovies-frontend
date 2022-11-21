import React from 'react';

import _ from 'lodash';

import { Button, ButtonProps } from '../Button';
import { Icon2 } from '../Icon2';
import { Loader } from '../Loader';
import { Text } from '../Text';

import { Wrapper, Body, Footer, Header, Content } from './Modal.styles';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = props => {
  const {
    children,
    title,
    actions,
    onClose,
    loading,
    footerPosition,
    ...rest
  } = props;

  return (
    <Wrapper {...Object.assign({ ...rest })}>
      <Content radius={8} elevation={4} elevationType="fluffy">
        {title && (
          <Header>
            <Text weight="bold" align="left" size="h6">
              {title}
            </Text>
            {onClose && <Icon2 name="fa-times" onClick={onClose} />}
          </Header>
        )}
        <Body>{children}</Body>
        {(loading || (actions && actions.length)) && (
          <Footer position={footerPosition}>
            {loading ? (
              <Loader type="spin" size={24} />
            ) : (
              actions
                .filter(item => !!_.get(item, 'label'))
                .map(({ label = '', ...actionProps }, index) => (
                  <Button key={index} {...(actionProps as ButtonProps)}>
                    {label}
                  </Button>
                ))
            )}
          </Footer>
        )}
      </Content>
    </Wrapper>
  );
};
