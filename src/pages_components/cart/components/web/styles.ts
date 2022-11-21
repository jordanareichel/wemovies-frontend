import { Button } from '@components/Button';
import { Image } from '@components/Image';
import { Paper } from '@components/Paper';
import { Text } from '@components/Text';
import { HiMinusSm, HiPlusSm, HiTrash } from 'react-icons/hi';
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
  width: 950px;
  min-height: 287px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Head = styled.div`
  & > p:first-child {
    flex: 1;
    min-width: 396px;
  }

  & > p:nth-child(2) {
    flex: 1;
    min-width: 180px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 8px 0 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;

    & > p:last-child {
      margin: 0 5px;
    }
  }
`;

export const Divider = styled.div<{
  width?: number;
  height?: number;
  empty?: boolean;
}>`
  background-color: #999999;
  height: ${props => (props.height ? `${props.height}px` : '1px')};
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  margin: ${props => (props.empty ? '0' : '21px 0')};
`;

export const Submit = styled(Button)`
  justify-content: flex-start;
`;

export const Total = styled(Text)`
  justify-content: flex-end;
`;

export const RowItens = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ImageItens = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  & > div {
    margin: auto;
    flex: 1;
    margin-left: 52px;

    & > p:last-child {
      margin: 8px 0;
    }
  }
`;

export const ButtonMinusStyled = styled(HiMinusSm)`
  width: 18px;
  height: 18px;
  color: #009edd;
  border: 1px solid #009edd;
  background: #ffffff;
  mix-blend-mode: normal;
  border-radius: 50%;
  margin: auto;
  margin-right: 11px;
  cursor: pointer;
`;

export const ButtonPlusStyled = styled(HiPlusSm)`
  width: 18px;
  height: 18px;
  color: #009edd;
  border: 1px solid #009edd;
  background: #ffffff;
  mix-blend-mode: normal;
  border-radius: 50%;
  margin: auto 11px;
  cursor: pointer;
`;

export const InputButton = styled.div`
  display: flex;
  flex: 1;
`;

export const ButtonTrash = styled(HiTrash)`
  width: 18px;
  height: 18px;
  color: #009edd;
  cursor: pointer;
`;

export const ItensEnd = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin: auto 52px;
  justify-content: space-between;
`;

export const Empty = styled.div`
  padding: 64px 0;
`;

export const ImageEmpty = styled(Image)`
  margin: 32px auto 0;
  display: flex;
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
