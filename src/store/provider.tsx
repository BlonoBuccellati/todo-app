'use client';

import { Provider } from 'react-redux';
import store from '@/store';

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default TodoProvider;
