import { TodoProps, TodoDispatchProps } from '@/types/todo-type';

const createNewData = (data: TodoProps, todoList: TodoProps[]) => {
  const newData = { ...data };
  const maxId = todoList.reduce((max, todo) => {
    return todo.id > max ? todo.id : max;
  }, 0);
  newData.id = maxId + 1;
  return newData;
};

const initStateTodo = undefined;
export const TodoReducer = (
  todoList: TodoProps[] = initStateTodo,
  { type, data }: TodoDispatchProps
) => {
  switch (type) {
    case 'add':
      const newData = createNewData(data, todoList);
      return [...todoList, newData];
    case 'delete':
      const deletedList = todoList.filter((item) => item.id != data.id);
      return deletedList;
    case 'completed':
      const completedList = todoList.map((item) => {
        item.completed = item.id === data.id || item.completed;
        return item;
      });
      return completedList;
    case 'edit':
      const newEditedList = todoList.map((item) => {
        const newItem = item.id === data.id ? data : item;
        return newItem;
      });
      return newEditedList;
    default:
  }
};
