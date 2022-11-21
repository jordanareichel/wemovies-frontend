import { Image } from '@components/Image';
import { Paper } from '@components/Paper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
`;

export const Body = styled.div`
  padding: 16px;
  align-self: center;
`;

export const View = styled(Paper)`
  width: 960px;
  min-height: 287px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    width: 343px;
  }
`;

export const Message = styled.div`
  padding: 64px 0;
`;

export const ImageConfirm = styled(Image)`
  margin: 32px auto 0;
`;

export const Action = styled.div`
  margin: 32px auto;
  display: flex;
  justify-content: center;

  & > button {
    max-width: 180px;
    height: 40px;
  }
`;
