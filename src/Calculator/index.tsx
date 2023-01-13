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
      line: [
        {
          id: 0,
          title: 'AC',
          value: 'clean',
          isGrid: 'false',
        },

        {
          id: 1,
          title: <Radical />,
          value: 'radical',
          isGrid: 'false',
        },

        {
          id: 2,
          title: <Percent />,
          value: 'percent',
          isGrid: 'false',
        },

        {
          id: 3,
          title: <Divide />,
          value: 'divide',
          isGrid: 'false',
        },
      ],
    },

    {
      line: [
        {
          id: 0,
          title: <NumberSeven />,
          value: 7,
          isGrid: 'false',
        },

        {
          id: 1,
          title: <NumberEight />,
          value: 8,
          isGrid: 'false',
        },

        {
          id: 2,
          title: <NumberNine />,
          value: 9,
          isGrid: 'false',
        },

        {
          id: 3,
          title: <X />,
          value: 'multiplication',
          isGrid: 'false',
        },
      ],
    },
    {
      line: [
        {
          id: 0,
          title: <NumberFour />,
          value: 4,
          isGrid: 'false',
        },
        {
          id: 1,
          title: <NumberFive />,
          value: 5,
          isGrid: 'false',
        },
        {
          id: 2,
          title: <NumberSix />,
          value: 6,
          isGrid: 'false',
        },
        {
          id: 3,
          title: <Minus />,
          value: 'subtraction',
          isGrid: 'false',
        },
      ],
    },

    {
      line: [
        {
          id: 0,
          title: <NumberOne />,
          value: 1,
          isGrid: 'false',
        },

        {
          id: 1,
          title: <NumberTwo />,
          value: 2,
          isGrid: 'false',
        },

        {
          id: 2,
          title: <NumberThree />,
          value: 3,
          isGrid: 'false',
        },

        {
          id: 3,
          title: <Plus />,
          value: 'addition',
          isGrid: 'false',
        },
      ],
    },

    {
      line: [
        {
          id: 0,
          title: <NumberZero />,
          value: 0,
          isGrid: 'true',
        },

        {
          id: 1,
          title: ',',
          value: ',',
          isGrid: 'true',
        },

        {
          id: 2,
          title: <Equals />,
          value: 'equal',
          isGrid: 'true',
        },
      ],
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Result>0</S.Result>
        {keyboardKey.map((line, index) => (
          <S.Line key={index}>
            {line.line.map((button) => (
              <S.Button key={button.id} value={button.value}>
                {button.title}
              </S.Button>
            ))}
          </S.Line>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
