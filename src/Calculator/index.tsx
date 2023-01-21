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
  Radical,
  X,
} from 'phosphor-react';
import * as S from './styles';

export const Calculator: React.FC = () => {
  const keyboardKey: {
    line: {
      isGrid: boolean;
      buttons: {
        id: number;
        title: string | React.ReactNode;
        value: string | number;
        variant?: 'lg';
        isColor: 'dark' | 'light' | 'orange';
        colorFont: 'black' | 'white';
      }[];
    };
  }[] = [
    {
      line: {
        isGrid: false,
        buttons: [
          {
            id: 0,
            title: 'AC',
            value: 'clean',
            variant: undefined,
            isColor: 'light',
            colorFont: 'black',
          },

          {
            id: 1,
            title: <Radical />,
            value: 'radical',
            variant: undefined,
            isColor: 'light',
            colorFont: 'black',
          },

          {
            id: 2,
            title: <Percent />,
            value: 'percent',
            variant: undefined,
            isColor: 'light',
            colorFont: 'black',
          },

          {
            id: 3,
            title: <Divide />,
            value: 'divide',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
          },
        ],
      },
    },

    {
      line: {
        isGrid: false,
        buttons: [
          {
            id: 0,
            title: <NumberSeven />,
            value: 7,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },

          {
            id: 1,
            title: <NumberEight />,
            value: 8,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },

          {
            id: 2,
            title: <NumberNine />,
            value: 9,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },

          {
            id: 3,
            title: <X />,
            value: 'multiplication',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
          },
        ],
      },
    },
    {
      line: {
        isGrid: false,
        buttons: [
          {
            id: 0,
            title: <NumberFour />,
            value: 4,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },
          {
            id: 1,
            title: <NumberFive />,
            value: 5,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },
          {
            id: 2,
            title: <NumberSix />,
            value: 6,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },
          {
            id: 3,
            title: <Minus />,
            value: 'subtraction',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
          },
        ],
      },
    },

    {
      line: {
        isGrid: false,
        buttons: [
          {
            id: 0,
            title: <NumberOne />,
            value: 1,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },

          {
            id: 1,
            title: <NumberTwo />,
            value: 2,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },

          {
            id: 2,
            title: <NumberThree />,
            value: 3,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },

          {
            id: 3,
            title: <Plus />,
            value: 'addition',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
          },
        ],
      },
    },

    {
      line: {
        isGrid: true,
        buttons: [
          {
            id: 0,
            title: <NumberZero />,
            value: 0,
            variant: 'lg',
            isColor: 'dark',
            colorFont: 'white',
          },

          {
            id: 1,
            title: ',',
            value: ',',
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
          },

          {
            id: 2,
            title: <Equals />,
            value: 'equal',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
          },
        ],
      },
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Result>0</S.Result>
        {keyboardKey.map((ln, index) => (
          <S.Line isGrid={ln.line.isGrid} key={index}>
            {ln.line.buttons.map((button) => (
              <S.Button
                variant={button.variant}
                isColor={button.isColor}
                colorFont={button.colorFont}
                key={button.id}
                value={button.value}>
                {button.title}
              </S.Button>
            ))}
          </S.Line>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
