import { TodoReducer } from '@/context/reducer/todo-reducer';

import { createStore } from 'redux';
import { deflate } from 'zlib';

const initState = 0;
const reducer = (
  state = initState,
  { type, step }: { type: string; step: number }
) => {
  switch (type) {
    case 'add':
      return state + step;
    case 'minus':
      return state - step;
    default:
      throw new Error('不明なアクションです。');
  }
};

export default createStore(TodoReducer);
