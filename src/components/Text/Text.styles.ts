import styled, { css } from 'styled-components';

import { TextProps } from './Text.types';

export const Paragraphy = styled.p<TextProps>`
  ${({
    italic,
    align = 'center',
    weight = 'normal',
    size = 16,
    color = '#242424',
    height = size,
  }) => css`
    text-align: ${align};
    font-weight: ${weight};
    font-style: ${italic ? 'italic' : 'normal'};
    color: ${color};
    font-size: ${size}px;
    line-height: ${height}px;
  `}
`;

export const Container = styled.div`
  & > ${Paragraphy} {
    display: inline;
  }
`;
