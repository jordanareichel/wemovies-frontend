import { Image } from '@components/Image';
import { Paper as PaperComponent } from '@components/Paper';
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

export const Paper = styled(PaperComponent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Itens = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;

  & > div {
    margin: 2px 16px;
  }
`;

export const ButtonTrash = styled(HiTrash)`
  width: 18px;
  height: 18px;
  color: #009edd;
  cursor: pointer;
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
  margin: 27px 0;
`;

export const ItensEnd = styled.div`
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled.div`
  background-color: #999999;
  height: 1px;
  width: 100%;
  justify-content: flex-end;
`;

export const Action = styled.div`
  margin: 32px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > button {
    min-width: 311px;
    height: 40px;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 0 20px;

  & > p:first-child {
    margin-right: 16px;
  }
`;

export const Empty = styled.div`
  padding: 64px 16px 0;
`;

export const ImageEmpty = styled(Image)`
  margin: 32px auto 0;
  display: flex;
`;
