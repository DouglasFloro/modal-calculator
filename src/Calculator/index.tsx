import { Divide, Radical } from 'phosphor-react';
import * as S from './styles';

export const Calculator: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Result>Resultado</S.Result>
        <S.Line>
          <button>AC</button>
          <button>
            <Radical />
          </button>
          <button>%</button>
          <button>
            <Divide />
          </button>
        </S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
      </S.Container>
    </S.Wrapper>
  );
};
