import { TodoProps } from '@/types/todo-type';
import { useState } from 'react';

import { edit } from '@/store/slices/todo-list-slice';
import { useDispatch } from 'react-redux';

const useTaskManage = (task: TodoProps) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEditSubmit = () => {
    const actionEdit = edit({ ...task, title, description });
    dispatch(actionEdit);
  };
  return { title, setTitle, description, setDescription, handleEditSubmit };
};

export default useTaskManage;
