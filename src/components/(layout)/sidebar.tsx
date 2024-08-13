'use client';

import { Button } from '@/components/ui/button';
import AddTask from '@/components/add-task-dialog';
import Link from 'next/link';
import { useStatusDispatch } from '@/context/todo-status-context';

const Sidebar = () => {
  const statusDispatch = useStatusDispatch();
  const clickTodoHandler = () => {
    statusDispatch && statusDispatch({ payload: { type: 'todo' } });
  };
  const clickCompleteHandler = () => {
    statusDispatch && statusDispatch({ payload: { type: 'completed' } });
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
