'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AddTask from '@/components/dialog/add-task-dialog';

import { useDispatch } from 'react-redux';
import {
  toggleCompleted,
  toggleTodo,
} from '@/store/slices/item-button-status-slice';

const Sidebar = () => {
  const statusDispatch = useDispatch();

  const clickTodoHandler = () => {
    const todoAction = toggleTodo();
    statusDispatch(todoAction);
  };
  const clickCompleteHandler = () => {
    const completedChangeAction = toggleCompleted();
    statusDispatch(completedChangeAction);
  };
  return (
    // TODO:クリックしたら色が変わるようにしたい。(グローバルなstateでやっている途中。)
    <aside className='h-full bg-slate-100 w-full'>
      <Link href={'todo'}>
        <Button variant='todo' onClick={clickTodoHandler}>
          todo
        </Button>
      </Link>
      <Link href={'completed'}>
        <Button variant='todo' onClick={clickCompleteHandler}>
          完了
        </Button>
      </Link>
      <AddTask>
        <Button variant='todo'>追加</Button>
      </AddTask>
    </aside>
  );
};

export default Sidebar;
