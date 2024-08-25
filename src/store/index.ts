import todoList from '@/store/slices/todo-list-slice';
import statusChange from './slices/item-button-status-slices';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    todoList: todoList,
    toggleChange: statusChange,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
