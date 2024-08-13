'use client';

import { TodoProps } from '@/types/todo-type';
import { useStatusState } from '@/context/todo-status-context';

import CompletedButton from './complete-button';
import DeleteButton from './delete-button';

const getButtonName = (state: string | undefined) => {
  switch (state) {
    case 'completed':
      return '削除';
    case 'todo':
      return '完了';
    default:
      return undefined;
  }
};
const TaskButton = ({ id, title, description, completed }: TodoProps) => {
  const state = useStatusState();
  const buttonName = getButtonName(state);

  const CardButton = () => {
    if (buttonName === '削除') {
      return (
        <DeleteButton
          id={id}
          title={title}
          description={description}
          completed={completed}
          buttonName={buttonName}
        />
      );
    } else {
      return (
        <CompletedButton
          id={id}
          title={title}
          description={description}
          completed={completed}
          buttonName={buttonName}
        />
      );
    }
  };
  return <>{state && <CardButton />}</>;
};

export default TaskButton;
