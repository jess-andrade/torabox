import { createContext, useContext } from 'react';

export type boxOpenedContextProps = {
  boxOpened: string;
  setBoxOpened: (boxOpened: string) => void;
};

export const boxOpenedContext = createContext<boxOpenedContextProps>({
  boxOpened: '',
  setBoxOpened: () => { },
});

export const useBoxClosedContext = () => useContext(boxOpenedContext);
