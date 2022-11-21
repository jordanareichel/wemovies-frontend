import styled, { css } from 'styled-components';

import { PaperProps } from './Paper.types';

export const Wrapper = styled.div<PaperProps>`
  ${({
    size,
    block,
    center,
    circle,
    height,
    radius = 0,
    elevation = 0,
    borderWidth = 0,
    color = 'white',
    flexDirection = 'row',
    elevationType = 'tight',
    borderColor = 'transparent',
  }) => css`
    flex-direction: ${flexDirection};
    height: ${height ? `${height}px` : 'auto'};
    align-items: ${center ? 'center' : 'flex-start'};
    justify-content: ${center ? 'center' : 'flex-start'};
    width: ${block ? '100%' : size ? `${size}px` : 'auto'};
    background-color: ${color};
    border-radius: ${circle && size ? Math.round(size / 2) : radius}px;
    border: ${borderWidth ? `${borderWidth}px solid ${borderColor}` : 'none'};
    box-shadow: ${elevation ? `${elevationType}` : 'none'};
  `}
  overflow: hidden;
  position: relative;
  display: inline-flex;
`;
