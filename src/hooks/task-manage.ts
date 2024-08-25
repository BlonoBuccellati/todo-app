import { TodoProps } from '@/types/todo-type';

import { useState } from 'react';

type PartialTodo = Pick<TodoProps, 'description' | 'title'>;
const useTaskManage = (task: PartialTodo) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  return { title, setTitle, description, setDescription };
};

export default useTaskManage;
