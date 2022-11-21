import { LoadingProps } from 'react-loading';

export type LoaderPropsSpinner = {
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
} & LoadingProps;
