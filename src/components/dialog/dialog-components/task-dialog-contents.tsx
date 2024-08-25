import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TaskDialogContentProps {
  title: string;
  description: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TaskDialogContent = ({
  title,
  description,
  onChangeTitle,
  onChangeDescription,
}: TaskDialogContentProps) => {
  return (
    <div className='grid gap-4 py-4'>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='name' className='text-right'>
          タイトル
        </Label>
        <Input
          id='name'
          className='col-span-3'
          placeholder='todo'
          onChange={onChangeTitle}
          value={title}
        />
      </div>
      <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor='contents' className='text-right'>
          内容
        </Label>
        <Input
          id='contents'
          className='col-span-3 h-60'
          placeholder='コンテンツ'
          onChange={onChangeDescription}
          value={description}
        />
      </div>
    </div>
  );
};

export default TaskDialogContent;
