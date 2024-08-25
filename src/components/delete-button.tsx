import { taskRemove } from '@/store/slices/todo-list-slice';
import { Button } from './ui/button';

import { useDispatch } from 'react-redux';

const DeleteButton = ({
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
    const action = taskRemove({ id, title, description, completed });
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

export default DeleteButton;
