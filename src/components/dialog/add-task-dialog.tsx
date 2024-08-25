'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import TaskDialogHeader from './dialog-components/task-dialog-header';
import TaskDialogContent from './dialog-components/task-dialog-contents';
import TaskDialogFooter from './dialog-components/task-dialog-footer';

import { useDispatch } from 'react-redux';
import { taskAdd } from '@/store/slices/task-crud-slice';
import useTaskManage from '@/hooks/task-manage';

interface AddTaskProps {
  children: React.ReactNode;
}
const AddTask = ({ children }: AddTaskProps) => {
  const { title, setTitle, description, setDescription } = useTaskManage({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();
  const handleAddSubmit = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    const actionAddNewTask = taskAdd(newTask);
    dispatch(actionAddNewTask);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <TaskDialogHeader
          title='タスクを追加します。'
          description='タスクのタイトルと内容を記載してください。'
        />
        {/* コンテンツ */}
        <TaskDialogContent
          title={title}
          onChangeTitle={(e) => setTitle(e.target.value)}
          description={description}
          onChangeDescription={(e) => setDescription(e.target.value)}
        />

        <TaskDialogFooter buttonName='追加' onClickSubmit={handleAddSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
