import React from 'react';

import { Icon2Props } from '../Icon2';
import { TextProps } from '../Text';

type ButtonColors = 'info' | 'success' | 'warning' | 'error' | string;

export type ButtonIconProps = {
  iconSize?: Icon2Props['fontSize'];
};

export type ButtonFontProps = {
  fontColor?: TextProps['color'];
  fontWeight?: TextProps['weight'];
};

export type ChipProps = {
  block?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: ButtonColors | string;
  shape?: 'square' | 'bordered' | 'rounded';
  variant?: 'outlined' | 'contained' | 'ghost';
  colorHover?: string;
  colorActive?: string;
  colorBg?: string;
};

export type ButtonProps = {
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonIconProps &
  ButtonFontProps &
  ChipProps;
