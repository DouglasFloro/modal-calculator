import {
  Divide,
  Equals,
  Minus,
  NumberEight,
  NumberFive,
  NumberFour,
  NumberNine,
  NumberOne,
  NumberSeven,
  NumberSix,
  NumberThree,
  NumberTwo,
  NumberZero,
  Percent,
  Plus,
  PlusMinus,
  Radical,
  X,
} from 'phosphor-react';
import * as S from './styles';

export const Calculator: React.FC = () => {
  const keyboardKey = [
    {
      ln: [
        {
          id: 0,
          title: 'AC',
          value: 'clean',
        },

        {
          id: 1,
          title: <Radical />,
          value: 'radical',
        },

        {
          id: 2,
          title: <Percent />,
          value: 'percent',
        },

        {
          id: 3,
          title: <Divide />,
          value: 'divide',
        },
      ],
    },

    {
      ln: [
        {
          id: 0,
          title: <NumberSeven />,
          value: 7,
        },

        {
          id: 1,
          title: <NumberEight />,
          value: 8,
        },

        {
          id: 2,
          title: <NumberNine />,
          value: 9,
        },

        {
          id: 3,
          title: <X />,
          value: 'multiplication',
        },
      ],
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Result>0</S.Result>
        <div>
          <S.Line>
            <S.Button>AC</S.Button>
            <S.Button>
              <Radical />
            </S.Button>
            <S.Button>
              <Percent />
            </S.Button>
            <S.Button>
              <Divide />
            </S.Button>
          </S.Line>
          <S.Line>
            <S.Button>
              <NumberSeven />
            </S.Button>
            <S.Button>
              <NumberEight />
            </S.Button>
            <S.Button>
              <NumberNine />
            </S.Button>
            <S.Button>
              <X />
            </S.Button>
          </S.Line>
          <S.Line>
            <S.Button>
              <NumberFour />
            </S.Button>
            <S.Button>
              <NumberFive />
            </S.Button>
            <S.Button>
              <NumberSix />
            </S.Button>
            <S.Button>
              <Minus />
            </S.Button>
          </S.Line>
          <S.Line>
            <S.Button>
              <NumberOne />
            </S.Button>
            <S.Button>
              <NumberTwo />
            </S.Button>
            <S.Button>
              <NumberThree />
            </S.Button>
            <S.Button>
              <Plus />
            </S.Button>
          </S.Line>
          <S.Line isGrid>
            <S.Button variant="lg">
              <NumberZero />
            </S.Button>
            <S.Button>,</S.Button>
            <S.Button>
              <Equals />
            </S.Button>
          </S.Line>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};
