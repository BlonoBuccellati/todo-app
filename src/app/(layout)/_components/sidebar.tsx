import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import AddTask from './add-task-dialog';

const Sidebar = () => {
  return (
    <aside className='h-full bg-slate-100 w-full'>
      <Button variant='todo'>todo</Button>
      <Button variant='todo'>完了</Button>
      <AddTask>
        <Button variant='todo'>追加</Button>
      </AddTask>
    </aside>
  );
};

export default Sidebar;
