import React, { useMemo } from 'react';

import { Icon2 } from '../Icon2';

import { Wrapper, Title } from './Button.styles';
import { ButtonProps } from './Button.types';
import hexToHsl from './hexToHsl';

export const Button: React.FC<ButtonProps> = props => {
  const {
    icon,
    variant = 'contained',
    disabled,
    children,
    iconSize,
    fontColor,
    color,
    fontWeight = '700',
    ...rest
  } = props;

  const textColor = useMemo(() => {
    const variantTest = ['outlined', 'ghost'].includes(variant);

    return (
      (disabled && variantTest && 'neutral4') ||
      fontColor ||
      (variantTest && color) ||
      'white'
    );
  }, [variant, disabled, fontColor, color]);

  const buttonProps = useMemo(() => {
    const buttonColor = color;

    return {
      color: disabled ? 'neutral4' : buttonColor,
      colorBg: hexToHsl(buttonColor, { setL: 93 }),
      colorHover: hexToHsl(buttonColor, { sumL: -5 }),
      colorActive: hexToHsl(buttonColor, { sumL: -10 }),
    };
  }, [color, disabled]);

  const renderIcon = useMemo(() => {
    return icon && <Icon2 name={icon} fontSize={iconSize} color={textColor} />;
  }, [textColor, icon, iconSize]);

  const renderTitle = useMemo(() => {
    return React.isValidElement(children)
      ? children
      : children && (
          <Title haveIcon={!!icon} weight={fontWeight} color={textColor}>
            {children}
          </Title>
        );
  }, [textColor, icon, children, fontWeight]);

  return (
    <Wrapper {...rest} {...buttonProps} {...{ variant, disabled }}>
      {renderIcon}
      {renderTitle}
    </Wrapper>
  );
};
