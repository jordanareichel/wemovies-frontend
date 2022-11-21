import _ from 'lodash';
import styled, { css } from 'styled-components';

import { Text } from '../Text';

import { ChipProps } from './Button.types';

const radiusShape = {
  square: 0,
  rounded: 100,
  bordered: 4,
};

export const Wrapper = styled.button<ChipProps>`
  ${({
    block,
    color,
    colorBg,
    colorHover,
    colorActive,
    shape = 'rounded',
    variant = 'contained',
    size = 12,
  }) => css`
    width: ${block ? '100%' : 'auto'};
    border-radius: ${_.get(radiusShape, shape, 0)}px;
    padding: ${size}px 16px;
    border-color: ${variant === 'ghost' ? 'transparent' : color};
    background-color: ${['outlined', 'ghost'].includes(variant)
      ? 'transparent'
      : color === 'success'
      ? '#039B00'
      : color};

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
    }

    &:hover {
      border-color: ${variant === 'ghost' ? 'transparent' : colorHover};
      background-color: ${['outlined', 'ghost'].includes(variant)
        ? colorBg
        : colorHover};
    }

    &:active {
      border-color: ${variant === 'ghost' ? 'transparent' : colorActive};
      background-color: ${['outlined', 'ghost'].includes(variant)
        ? 'transparent'
        : colorActive};
    }
  `}
  display: flex;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled(Text)<{ haveIcon?: boolean }>`
  ${({ haveIcon }) => css`
    margin: 0 0 0 ${haveIcon ? 8 : 0}px;
  `}
  display: inline;
`;
