import styled, { css } from 'styled-components';

import { Button } from '../Button';
import { Paper } from '../Paper';
import { Text } from '../Text';

import { CardProps } from './Card.types';

export const Wrapper = styled(Paper)<CardProps>`
  ${({ size, height }) => css`
    background-color: #ffffff;
    width: ${size ? size : '309'}px;
    min-height: ${height ? height : '305'}px;
  `}
  display: flex;
  border-radius: 4px;
  cursor: pointer;
`;

export const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 11px 0;
`;

export const Description = styled.div``;

export const Title = styled(Text)`
  margin: 0 0 2px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    display: flex;
    margin 0 12px;

    & > p {
      margin-left: 5px;
    }
  }
`;

export const Footer = styled.div`
  padding: 0 11px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    min-width: 287px;
  }
`;
