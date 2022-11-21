import styled, { css } from 'styled-components';

import { Icon2 } from '../Icon2';

import { InputProps, ContainerProps, InputIconProps } from './Input.types';

const cssWithValue = css<{ color?: string }>`
  input {
    padding: 0 16px;
    color: #2f2e41;
    background-color: #ffffff;
  }

  label {
    top: 10px;
    font-size: 12px;
  }
`;

export const Wrapper = styled.div<ContainerProps & { withValue: boolean }>`
  ${({
    block,
    color,
    withValue,
    radius = 4,
    iconPosition = 'right',
    width,
  }) => css`
    border-radius: ${radius}px;
    width: ${block ? '100%' : width ? `${width}px` : 'auto'};
    border-color: ${color};
    background-color: ${color};

    label,
    input {
      font-size: 14px;
      line-height: 19px;
      color: ${color};

      padding: 8px;
      ${iconPosition !== 'none' ? `padding-${iconPosition}: 40px` : ''};
    }

    &:hover {
      border-color: ${color};

      label,
      input {
        color: #2f2e41;
      }
    }

    &:focus-within {
      border-color: ${color};

      ${cssWithValue}
      label {
        color: #2f2e41;
      }
    }
    ${withValue ? cssWithValue : ''}
  `}
  display: flex;
  overflow: hidden;
  min-height: 26px;
  border-width: 1px;
  position: relative;
  border-style: solid;
  align-items: center;
`;

export const TextInput = styled.input<InputProps>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  position: absolute;
`;

export const IconInput = styled(Icon2)<InputIconProps>`
  ${({ position = 'right' }) => css`
    ${position}: 12px;
  `}
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`;
