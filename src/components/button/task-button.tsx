'use client';

import { TodoProps } from '@/types/todo-type';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import CrudButton from './crud-button/crud-button';
import { taskCompleted, taskRemove } from '@/store/slices/task-crud-slice';

const getButtonInfo = (state: string | undefined, id: number) => {
  switch (state) {
    case 'completed':
      return { buttonName: '削除', action: taskRemove({ id }) };
    case 'todo':
      return { buttonName: '完了', action: taskCompleted({ id }) };
    default:
      return { buttonName: undefined };
  }
};

const TaskButton = ({ id }: TodoProps) => {
  const crudButton = useSelector(
    (state: RootState) => state.toggleChange.selected
  );
  const { buttonName, action } = getButtonInfo(crudButton, id);

  return (
    <>{crudButton && <CrudButton buttonName={buttonName} action={action} />}</>
  );
};

export default TaskButton;
