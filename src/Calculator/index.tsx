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
    {
      ln: [
        {
          id: 0,
          title: <NumberFour />,
          value: 4,
        },
        {
          id: 1,
          title: <NumberFive />,
          value: 5,
        },
        {
          id: 2,
          title: <NumberSix />,
          value: 6,
        },
        {
          id: 3,
          title: <Minus />,
          value: 'subtraction',
        },
      ],
    },

    {
      ln: [
        {
          id: 1,
          title: <NumberOne />,
          value: 1,
        },

        {
          id: 2,
          title: <NumberTwo />,
          value: 2,
        },

        {
          id: 3,
          title: <NumberThree />,
          value: 3,
        },

        {
          id: 0,
          title: <Plus />,
          value: 'addition',
        },
      ],
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Result>0</S.Result>
        <div>
          {keyboardKey.map((bt) => (
            <S.Line>
              <S.Button>
                <button>{}</button>
              </S.Button>
            </S.Line>
          ))}

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
