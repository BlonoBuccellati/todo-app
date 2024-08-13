'use client';
import { createContext, useContext, useReducer, useState } from 'react';
import { todoStatusReducer } from './reducer/todo-status-reducer';
import TodoStatusContext from '@/context/todo-status-context';
import {
  TodoStatusReducerProps,
  TodoStatusStateProps,
} from '@/types/todo-type';

const initState = undefined;
const ContextStatusState = createContext<string | undefined>(initState);
type statusContextType = React.Dispatch<TodoStatusReducerProps>;
const ContextStatusDispatch = createContext<statusContextType | null>(null);

interface TodoStatusContextProviderProps {
  children: React.ReactNode;
}
const TodoStatusContextProvider = ({
  children,
}: TodoStatusContextProviderProps) => {
  const [state, dispatch] = useReducer(todoStatusReducer, initState);
  return (
    <ContextStatusDispatch.Provider value={dispatch}>
      <ContextStatusState.Provider value={state}>
        {children}
      </ContextStatusState.Provider>
    </ContextStatusDispatch.Provider>
  );
};

export default TodoStatusContextProvider;
export const useStatusState = () => useContext(ContextStatusState);
export const useStatusDispatch = () => useContext(ContextStatusDispatch);
