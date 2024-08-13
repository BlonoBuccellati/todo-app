export interface TodoProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// dispatchするときに使用する。
export interface TodoDispatchProps {
  type: 'add' | 'delete' | 'edit' | 'completed';
  data: TodoProps;
}

// status用
export interface TodoStatusReducerProps {
  payload: { type: 'completed' | 'todo' | undefined };
}
export interface TodoStatusStateProps {
  state: 'completed' | 'todo' | undefined;
}
