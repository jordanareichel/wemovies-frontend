export type PaperProps = {
  size?: number;
  height?: number;
  color?: string;
  block?: boolean;
  radius?: number;
  center?: boolean;
  circle?: boolean;
  elevation?: number;
  borderColor?: string;
  borderWidth?: number;
  flexDirection?: 'row' | 'column';
  elevationType?: 'tight' | 'fluffy';
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
