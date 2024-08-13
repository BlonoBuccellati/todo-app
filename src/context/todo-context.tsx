'use client';
import { createContext, useContext, useReducer } from 'react';
import { tasks } from '@/data/task';

import { TodoProps, TodoDispatchProps } from '@/types/todo-type';
import { TodoReducer } from './reducer/todo-reducer';

export const ContextTodoState = createContext<TodoProps[]>(tasks);

type todoDispatch = React.Dispatch<TodoDispatchProps>;
const ContextTodoDispatch = createContext<todoDispatch | undefined>(undefined);

interface TodoContextProviderProps {
  children: React.ReactNode;
}

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [state, dispatch] = useReducer(TodoReducer, tasks);
  return (
    <ContextTodoState.Provider value={state}>
      <ContextTodoDispatch.Provider value={dispatch}>
        {children}
      </ContextTodoDispatch.Provider>
    </ContextTodoState.Provider>
  );
};

const useTodo = () => useContext(ContextTodoState);
const useTodoDispatch = () => useContext(ContextTodoDispatch);
export { TodoContextProvider, useTodo, useTodoDispatch };
