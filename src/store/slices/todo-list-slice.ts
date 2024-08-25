import { TodoProps } from '@/types/todo-type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { tasks } from '@/data/task';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: tasks,
  reducers: {
    taskAdd(state, action: PayloadAction<TodoProps>) {
      const newData = createNewData(action.payload, state);
      state.push(newData);
    },
    taskRemove(state, action: PayloadAction<TodoProps>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      // インデックスが見つかれば削除
      index !== -1 && state.splice(index, 1);
    },
    //idだけ渡せばいい
    taskCompleted(state, action: PayloadAction<TodoProps>) {
      const itemToComplete = state.find(
        (item) => item.id === action.payload.id
      );
      if (itemToComplete) {
        itemToComplete.completed = !itemToComplete.completed;
      }
    },
    edit(state, { payload }) {
      let elementForEdit = state.find((item) => item.id === payload.id);
      console.log(elementForEdit);
      if (elementForEdit) {
        elementForEdit.completed = payload.completed;
        elementForEdit.title = payload.title;
        elementForEdit.description = payload.description;
      }
    },
  },
});

const createNewData = (data: any, todoList: any) => {
  const newData = { ...data };
  const maxId = todoList.reduce((max: any, todo: any) => {
    return todo.id > max ? todo.id : max;
  }, 0);
  newData.id = maxId + 1;
  return newData;
};

// ストアに登録用
export default todoListSlice.reducer;
// コンポーネントで利用するためにexport
export const { taskAdd, taskRemove, taskCompleted, edit } =
  todoListSlice.actions;
