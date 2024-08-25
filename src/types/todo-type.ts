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
export interface TodoStatusStateProps {
  selected: 'completed' | 'todo' | undefined;
}
