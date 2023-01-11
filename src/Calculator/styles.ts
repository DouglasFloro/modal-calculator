import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 240px;

  display: flex;
  flex-direction: column;
  background: #000;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
  }
`;

export const Result = styled.section`
  height: 35px;
  background: #fff;
  color: #000;
`;
export const Line = styled.div<{ isGrid?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  ${({ isGrid }) =>
    isGrid &&
    css`
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
    `}
`;

export const Button = styled.button<{ variant?: 'lg' }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: #333333;

  ${({ variant }) =>
    variant === 'lg' &&
    css`
      width: 100%;
      border-radius: 50px;
      display: flex;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      padding: 0 16px;
    `}
`;
