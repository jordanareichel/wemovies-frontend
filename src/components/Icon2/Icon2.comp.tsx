import React from 'react';

import { IconMaterial } from './Icon2.styles';
import { Icon2Props } from './Icon2.types';

export const Icon2: React.FC<Icon2Props> = props => {
  const { name, color, ...rest } = props;

  return (
    <IconMaterial {...rest} iconColor={color}>
      {name}
    </IconMaterial>
  );
};

Icon2.defaultProps = {
  color: 'black',
  fontSize: 'small',
};
