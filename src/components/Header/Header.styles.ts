import { Text } from '@components/Text';
import styled from 'styled-components';

import { Paper } from '../Paper';

export const Wrapper = styled(Paper)`
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  padding: 4px 32px;
  user-select: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #2f2e41;
`;

export const NavLeft = styled.div`
  margin-left: 240px;
  padding: 24px 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const NavRight = styled.div`
  margin-right: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  & > img {
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 48px;
`;

export const Title = styled(Text)`
  @media (max-width: 576px) {
    display: none;
  }
`;
