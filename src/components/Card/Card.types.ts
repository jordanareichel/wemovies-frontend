export type CardProps = {
  title: string;
  image: string;
  size?: number;
  height?: number;
  onSubmit: () => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  counter: number;
  value: number;
  titleButton: string;
  colorButton: string;
};
