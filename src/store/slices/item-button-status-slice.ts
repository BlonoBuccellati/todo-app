import { createSlice } from '@reduxjs/toolkit';

import { TodoStatusStateProps } from '@/types/todo-type';

const initialState: TodoStatusStateProps = {
  selected: undefined,
};

const statusChangeSlice = createSlice({
  name: 'toggleChange',
  initialState,
  reducers: {
    toggleCompleted(state) {
      state.selected = 'completed';
    },
    toggleTodo(state) {
      state.selected = 'todo';
    },
    toggleAll(state) {
      state.selected = undefined;
    },
  },
});

// store登録用
export default statusChangeSlice.reducer;

// コンポーネント利用用
export const { toggleCompleted, toggleTodo, toggleAll } =
  statusChangeSlice.actions;
