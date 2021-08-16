import React, {
  createContext, Dispatch, ReactChild, useReducer,
} from 'react';
import {
  initialState, getNovelsReducer, State, ActionType,
} from '../reducer/SampleReducer';

export const SampleContext = createContext<State | undefined>(undefined);
// @ts-ignore
export const SampleUpdateContext = createContext<Dispatch<ActionType>>(null);

export const SampleContextProvider = ({ children }: { children: ReactChild }) => {
  const [sample, dispatch] = useReducer(getNovelsReducer, initialState);

  return (
    <SampleContext.Provider value={sample}>
      <SampleUpdateContext.Provider value={dispatch}>
        {children}
      </SampleUpdateContext.Provider>
    </SampleContext.Provider>
  );
};
