import Icon from '@material-ui/core/Icon';
import styled, { css } from 'styled-components';

export const IconMaterial = styled(Icon)<{ iconColor?: string }>`
  ${({ iconColor = 'black' }) => css`
    color: ${iconColor};
  `}
`;
