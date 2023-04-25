import React, { createContext, useContext, useReducer } from 'react';

export type State = {
  user: any;
  // add other properties to state object as needed
};

type Props = {
  initialState: any;
  reducer: any;
  children: any;
};

export const StateContext = createContext({});

const StateProvider = ({ reducer, initialState, children }: Props) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

export const useStateValue = () => useContext(StateContext);
