import { IconProps } from '@material-ui/core';

export type Icon2Props = {
  name?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<IconProps, 'color'>;
