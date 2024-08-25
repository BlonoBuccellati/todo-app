'use client';

import { TodoProps } from '@/types/todo-type';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import TaskDialogHeader from './dialog-components/task-dialog-header';
import TaskDialogContent from './dialog-components/task-dialog-contents';
import TaskDialogFooter from './dialog-components/task-dialog-footer';

import useTaskManage from '@/hooks/task-manage';
import { taskEdit } from '@/store/slices/task-crud-slice';
import { useDispatch } from 'react-redux';

interface AddTaskProps {
  children: React.ReactNode;
  task: TodoProps;
}

const EditTask = ({ children, task }: AddTaskProps) => {
  const { title, setTitle, description, setDescription } = useTaskManage(task);
  const dispatch = useDispatch();
  const handleEditSubmit = () => {
    const actionEdit = taskEdit({ ...task, title, description });
    dispatch(actionEdit);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <TaskDialogHeader title='編集画面' description='タスクを編集します。' />
        {/* コンテンツ */}
        <TaskDialogContent
          title={title}
          onChangeTitle={(e) => setTitle(e.target.value)}
          description={description}
          onChangeDescription={(e) => setDescription(e.target.value)}
        />

        <TaskDialogFooter buttonName='保存' onClickSubmit={handleEditSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
