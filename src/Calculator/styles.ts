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
  border-radius: 10px;
  padding: 5px 5px;
`;

export const Result = styled.section`
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
  padding: 10px;
  background: #000;
  color: #fff;
  font-size: 1.7rem;
  border-radius: 10px;
  & > span {
    &:first-child {
      font-size: 1rem;
      color: #ccc;
    }
  }
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
      justify-items: end;
    `}
`;

export const Button = styled.button<{
  variant?: 'lg';
  isColor: 'dark' | 'light' | 'orange';
  isActive?: boolean;
  colorFont: 'black' | 'white';
}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.1em;
  cursor: pointer;

  color: ${({ colorFont }) => (colorFont === 'black' ? '#000' : '#fff')};
  background: ${({ isColor }) =>
    isColor === 'dark'
      ? '#333333'
      : isColor === 'light'
      ? '#A5A5A5'
      : '#FB9F0B'};

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

  ${({ isActive }) =>
    isActive &&
    css`
      color: #fb9f0b;
      background: #fff;
    `}
`;
