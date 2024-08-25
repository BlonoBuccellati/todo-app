'use client';

import {
  Dialog,
  DialogClose,
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

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { taskAdd } from '@/store/slices/todo-list-slice';

interface AddTaskProps {
  children: React.ReactNode;
}
const AddTask = ({ children }: AddTaskProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const handleAddSubmit = (e: any) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    const actionAddNewTask = taskAdd(newTask);
    console.log(actionAddNewTask);
    dispatch(actionAddNewTask);
  };

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
            <Input
              id='name'
              className='col-span-3'
              placeholder='todo'
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type='submit' onClick={handleAddSubmit}>
              追加
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
