import { Button } from './ui/button';
import { useTodoDispatch } from '@/context/todo-context';
import { useStatusState } from '@/context/todo-status-context';

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
  const dispatch = useTodoDispatch();
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch &&
      dispatch({
        type: 'completed',
        data: { id, title, description, completed },
      });
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
