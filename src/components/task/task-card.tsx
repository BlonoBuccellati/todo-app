import { TodoProps } from '@/types/todo-type';

import EditTask from '@/components/dialog/edit-task-dialog';
import TaskButton from '@/components/button/task-button';

interface TaskCardProps {
  task: TodoProps;
  key: number;
}
const TaskCard = ({ key, task }: TaskCardProps) => {
  return (
    <li key={key} className='hover:cursor-pointer group'>
      <EditTask task={task}>
        <div className='my-8 break-words shadow rounded-md py-6 bg-white'>
          <div className='flex justify-between items-center'>
            <div className='flex-grow text-center'>
              <div className='text-xl'>{task.title}</div>
              <div className='pt-5 text-sm'>{task.description}</div>
            </div>
            <TaskButton {...task} />
          </div>
        </div>
      </EditTask>
    </li>
  );
};

export default TaskCard;
