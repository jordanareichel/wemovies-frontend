import { ButtonProps } from '../Button';

export type ButtonAction = {
  label?: string;
} & ButtonProps;

export type ModalProps = {
  title?: string;
  visible: boolean;
  loading?: boolean;
  onClose?: () => void;
  actions: ButtonAction[];
  size?: number | 'sm' | 'lg';
  footerPosition?: 'start' | 'center' | 'end';
};
