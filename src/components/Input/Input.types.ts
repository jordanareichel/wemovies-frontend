import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';

import { Icon2Props } from '../Icon2';

export enum InputMaskEnum {
  'cep' = 'CEP',
  'cpf' = 'CPF',
  'cnpj' = 'CNPJ',
  'date' = 'DATE',
  'phone' = 'PHONE',
  'currency' = 'CURRENCY',
}

export type InputValueProps = string | number | readonly string[] | undefined;

export type ContainerProps = {
  block?: boolean;
  radius?: number;
  bgColor?: string;
  disabled?: boolean;
  color?: string;
  iconPosition?: 'left' | 'right' | 'none';
  width?: string;
};

export type InputProps = {
  ref?: any;
  icon?: string;
  width?: string;
  maxLength?: number;
  placeholder?: string;
  mask?: InputMaskEnum;
  value: InputValueProps;
  type?: HTMLInputTypeAttribute;
  iconOnClick?: Icon2Props['onClick'];
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChangeText?: Dispatch<SetStateAction<InputValueProps>>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
} & ContainerProps &
  LabelProps;

export type InputIconProps = {
  position: InputProps['iconPosition'];
};

export type LabelProps = {
  label?: string;
};
