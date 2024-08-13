import { TodoProps } from '@/types/todo-type';
import { useRouter } from 'next/router';

interface TaskCard {
  task: TodoProps;
}
// 多分今どこにも使ってない
const TaskCard = ({ task }: TaskCard) => {
  return (
    <div
      key={task.id}
      className='my-8 break-words shadow rounded-md py-6 bg-white'
    >
      <div className='text-xl'>{task.title}</div>
      <div className='pt-5 text-sm'>{task.description}</div>
    </div>
  );
};

export default TaskCard;
