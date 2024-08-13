import { useTodo, useTodoDispatch } from '@/context/todo-context';
import EditTask from './edit-task-dialog';
import { TodoProps } from '@/types/todo-type';
import TaskCard from './task-card';
import { Button } from './ui/button';
import TaskButton from './task-button';

interface TaskListProps {
  completed?: boolean;
}

const TaskList = ({ completed }: TaskListProps) => {
  const tasks = useTodo();

  const displayTasks = tasks.filter((task: TodoProps) => {
    if (completed === undefined) {
      return task;
    } else {
      return completed === task.completed;
    }
  });

  return (
    <div className='text-center m-4 w-[600px]'>
      <ul>
        {displayTasks.map((task: TodoProps) => {
          return (
            <li key={task.id} className='hover:cursor-pointer group'>
              <EditTask task={task}>
                <div
                  key={task.id}
                  className='my-8 break-words shadow rounded-md py-6 bg-white'
                >
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
        })}
      </ul>
    </div>
  );
};

export default TaskList;
