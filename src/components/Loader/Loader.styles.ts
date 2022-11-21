import ReactLoading from 'react-loading';
import styled from 'styled-components';

import { LoaderPropsSpinner } from './Loader.types';

export const Wrapper = styled<any>(ReactLoading).attrs<LoaderPropsSpinner>(
  ({ color = '#42526E', size = 55 }) => ({
    color: color,
    height: size,
    width: size,
  }),
)``;
