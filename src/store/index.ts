import todoList from '@/store/slices/task-crud-slice';
import statusChange from './slices/item-button-status-slice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    todoList: todoList,
    toggleChange: statusChange,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
