import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-bottom: 56px;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 24px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 10px 11px;
  }
`;
