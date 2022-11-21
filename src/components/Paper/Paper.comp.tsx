import React from 'react';

import { Wrapper } from './Paper.styles';
import { PaperProps } from './Paper.types';

export const Paper: React.FC<PaperProps> = props => {
  return <Wrapper {...props} />;
};
