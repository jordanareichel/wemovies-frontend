import React from 'react';

import { Wrapper } from './Loader.styles';
import { LoaderPropsSpinner } from './Loader.types';

export const Loader: React.FC<LoaderPropsSpinner> = props => {
  return <Wrapper {...props} />;
};

Loader.defaultProps = {
  type: 'spin',
};
