import React, { useCallback, useMemo } from 'react';

import currency from '../../utils/currency';

import { Wrapper, TextInput, IconInput } from './Input.styles';
import { InputProps, InputMaskEnum } from './Input.types';

export const Input: React.FC<InputProps> = props => {
  const {
    icon,
    mask,
    block,
    value,
    radius,
    bgColor,
    disabled,
    color,
    iconOnClick,
    iconPosition,
    onChangeText,
    maxLength: maxLengthProps,
    width,
    ...rest
  } = props;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      let text = event.target.value;

      switch (mask) {
        case InputMaskEnum.cep:
          text = text.replace(/\D/g, '');
          text = text.replace(/(\d{2})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d{1,3})$/, '$1-$2');
          break;

        case InputMaskEnum.cpf:
          text = text.replace(/\D/g, '');
          text = text.replace(/(\d{3})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
          break;

        case InputMaskEnum.cnpj:
          text = text.replace(/\D/g, '');
          text = text.replace(/(\d{2})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d)/, '$1.$2');
          text = text.replace(/(\d{3})(\d)/, '$1/$2');
          text = text.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
          break;

        case InputMaskEnum.date:
          text = text.replace(/\D/g, '');
          text = text.replace(/(\d{2})(\d)/, '$1/$2');
          text = text.replace(/(\d{2})(\d{1,4})/, '$1/$2');
          break;

        case InputMaskEnum.phone:
          text = text.replace(/\D/g, '');
          text = text.replace(/(\d{1,2})/, '($1');
          text = text.replace(/(\d{2})(\d)/, '$1) $2');
          text = text.replace(/(\d{5})(\d{1,4})/, '$1-$2');
          break;

        case InputMaskEnum.currency:
          text = text.replace(/\D/g, '');
          break;

        default:
          break;
      }

      onChangeText && onChangeText(text);
    },
    [mask, onChangeText],
  );

  const maxLength = useMemo(() => {
    return (
      maxLengthProps ||
      (mask &&
        ([InputMaskEnum.cep, InputMaskEnum.date].includes(mask)
          ? 10
          : mask === InputMaskEnum.cpf
          ? 14
          : mask === InputMaskEnum.phone
          ? 15
          : mask === InputMaskEnum.cnpj
          ? 18
          : undefined))
    );
  }, [mask, maxLengthProps]);

  const renderIcon = useMemo(() => {
    return (
      icon && (
        <IconInput name={icon} onClick={iconOnClick} position={iconPosition} />
      )
    );
  }, [icon, iconOnClick, iconPosition]);

  const renderValue = useMemo(() => {
    return value && mask === InputMaskEnum.currency
      ? currency(Number(value)).split(',')[0]
      : value;
  }, [value, mask]);

  return (
    <Wrapper
      withValue={!!renderValue}
      iconPosition={renderIcon ? iconPosition : 'none'}
      {...{ block, radius, bgColor, disabled, color, width }}>
      <TextInput
        {...{
          disabled,
          maxLength,
          ...rest,
        }}
        value={renderValue}
        onChange={handleChange}
      />
      {renderIcon}
    </Wrapper>
  );
};

Input.defaultProps = {
  type: 'text',
};
