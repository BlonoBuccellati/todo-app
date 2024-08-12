import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface AddTaskProps {
  children: React.ReactNode;
}
const AddTask = ({ children }: AddTaskProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>タスクを追加します。</DialogTitle>
          <DialogDescription>
            タスクのタイトルと内容を記載してください。
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              タイトル
            </Label>
            <Input id='name' className='col-span-3' placeholder='todo' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='contents' className='text-right'>
              内容
            </Label>
            <Input
              id='contents'
              className='col-span-3 h-60'
              placeholder='コンテンツ'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>追加</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
