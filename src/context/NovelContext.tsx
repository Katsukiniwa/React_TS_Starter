import React, {
  createContext, Dispatch, ReactChild, useReducer,
} from 'react';
import {
  initialState, getNovelsReducer, State, ActionType,
} from '../reducer/NovelReducer';

export const NovelContext = createContext<State | undefined>(undefined);
// @ts-ignore
export const NovelUpdateContext = createContext<Dispatch<ActionType>>(null);

export const NovelContextProvider = ({ children }: { children: ReactChild }) => {
  const [novel, dispatch] = useReducer(getNovelsReducer, initialState);

  return (
    <NovelContext.Provider value={novel}>
      <NovelUpdateContext.Provider value={dispatch}>
        {children}
      </NovelUpdateContext.Provider>
    </NovelContext.Provider>
  );
};
