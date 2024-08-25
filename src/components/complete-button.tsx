import { Button } from './ui/button';

import { useDispatch } from 'react-redux';

import { taskCompleted } from '@/store/slices/todo-list-slice';

const CompletedButton = ({
  id,
  title,
  description,
  completed,
  buttonName,
}: {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  buttonName: string | undefined;
}) => {
  const dispatch = useDispatch();
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const action = taskCompleted({ id, title, description, completed });
    dispatch(action);
  };
  return (
    <Button
      className='absolute right-[20rem] group-hover:visible'
      onClick={clickHandler}
    >
      {buttonName}
    </Button>
  );
};

export default CompletedButton;
