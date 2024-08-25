// TodoList操作用
export interface TodoProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// toggle用
export interface TodoToggleButtonStatusProps {
  selected: 'completed' | 'todo' | undefined;
}

// Todoでは、idのみ使用する場面が多い。
export type TodoIdProps = Pick<TodoProps, 'id'>;
