import styled, { css } from 'styled-components';

import { Paper } from '../Paper';

import { ModalProps } from '.';

export const Wrapper = styled.div<ModalProps>`
  ${({ visible, size = 500 }) => css`
    display: ${visible ? 'flex' : 'none'};
    background-color: #24242480;

    & > ${Content} {
      max-width: ${size}px;
    }
  `}
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Content = styled(Paper)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

export const Header = styled.div`
  border-bottom: 2px solid #dadee3;

  & > svg:hover {
    background: #ebeef2;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px;
  width: 100%;

  & svg {
    padding: 4px;
    font-size: 24px;
    border-radius: 100px;
  }
`;

export const Body = styled.div`
  padding: 32px 24px;
  width: 100%;
`;

export const Footer = styled.div<{ position?: string }>`
  ${({ position = 'end' }) => css`
    justify-content: ${['start', 'end'].includes(position)
      ? `flex-${position}`
      : position};
  `}
  width: 100%;
  display: flex;
  padding: 8px 24px 24px 24px;

  & > button {
    margin: 0 8px;
  }

  & > button:first-child {
    margin-left: 0;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;
