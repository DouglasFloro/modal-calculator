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
import { useState } from 'react';
import * as S from './styles';

export const Calculator: React.FC = () => {
  const [number, setNumber] = useState<string | number>(0);
  const [oldNumber, setOldNumber] = useState<string | number>(0);
  const [operation, setOperation] = useState<string | undefined>(undefined);

  const cleanHandler = (value: string) => {
    setNumber((old) =>
      old.toString().length === 1 ? 0 : old.toString().slice(0, -1),
    );
  };
  /**
   * operations
   * soma +
   * subtração -
   * multiplicação *
   * divisão /
   * radical Math.sqrt(9)
   */
  const operationHandler = (value: string) => {
    setOperation(value);
  };

  const numberHandler = (value: number) => {
    setNumber((old) => (old === 0 ? value : old + String(value)));
  };

  const equalHandler = (value: string) => {
    console.log('clicou ', value);
  };

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
        onClick?: React.MouseEventHandler;
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
            onClick: () => cleanHandler('clean'),
          },

          {
            id: 1,
            title: <Radical />,
            value: 'radical',
            variant: undefined,
            isColor: 'light',
            colorFont: 'black',
            onClick: () => operationHandler('radical'),
          },

          {
            id: 2,
            title: <Percent />,
            value: 'percent',
            variant: undefined,
            isColor: 'light',
            colorFont: 'black',
            onClick: () => operationHandler('percent'),
          },

          {
            id: 3,
            title: <Divide />,
            value: 'divide',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
            onClick: () => operationHandler('divide'),
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
            onClick: () => numberHandler(7),
          },

          {
            id: 1,
            title: <NumberEight />,
            value: 8,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
            onClick: () => numberHandler(8),
          },

          {
            id: 2,
            title: <NumberNine />,
            value: 9,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
            onClick: () => numberHandler(9),
          },

          {
            id: 3,
            title: <X />,
            value: 'multiplication',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
            onClick: () => operationHandler('multiplication'),
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
            onClick: () => numberHandler(4),
          },
          {
            id: 1,
            title: <NumberFive />,
            value: 5,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
            onClick: () => numberHandler(5),
          },
          {
            id: 2,
            title: <NumberSix />,
            value: 6,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
            onClick: () => numberHandler(6),
          },
          {
            id: 3,
            title: <Minus />,
            value: 'subtraction',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
            onClick: () => operationHandler('subtraction'),
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
            onClick: () => numberHandler(1),
          },

          {
            id: 1,
            title: <NumberTwo />,
            value: 2,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
            onClick: () => numberHandler(2),
          },

          {
            id: 2,
            title: <NumberThree />,
            value: 3,
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
            onClick: () => numberHandler(3),
          },

          {
            id: 3,
            title: <Plus />,
            value: 'addition',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
            onClick: () => operationHandler('addition'),
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
            onClick: () => numberHandler(0),
          },

          {
            id: 1,
            title: ',',
            value: ',',
            variant: undefined,
            isColor: 'dark',
            colorFont: 'white',
            onClick: () => operationHandler(','),
          },

          {
            id: 2,
            title: <Equals />,
            value: 'equal',
            variant: undefined,
            isColor: 'orange',
            colorFont: 'white',
            onClick: () => equalHandler('equal'),
          },
        ],
      },
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Result>{number}</S.Result>
        {keyboardKey.map((ln, index) => (
          <S.Line isGrid={ln.line.isGrid} key={index}>
            {ln.line.buttons.map((button) => (
              <S.Button
                onClick={button.onClick}
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
