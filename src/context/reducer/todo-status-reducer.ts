import { TodoStatusReducerProps } from '@/types/todo-type';

const todoStatusReducer = (
  state: string|undefined,
  { payload }: TodoStatusReducerProps
) => {
  switch (payload.type) {
    case 'completed':
      return 'completed';
    case 'todo':
      return 'todo';
    default:
      return undefined;
  }
};

export { todoStatusReducer };
