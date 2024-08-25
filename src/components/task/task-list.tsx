import { useSelector } from 'react-redux';

import TaskCard from './task-card';

import { TodoProps } from '@/types/todo-type';
import { RootState } from '@/store';

interface TaskListProps {
  completed?: boolean;
}

const TaskList = ({ completed }: TaskListProps) => {
  const tasks = useSelector((state: RootState) => state.todoList);

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
          return <TaskCard key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
