'use client';

import {
  DialogClose,
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

import { useState } from 'react';
import { TodoProps } from '@/types/todo-type';
import { edit } from '@/store/slices/todo-list-slice';
import { useDispatch } from 'react-redux';
import useTaskManage from '@/hooks/task-manage';

interface AddTaskProps {
  children: React.ReactNode;
  task: TodoProps;
}
const EditTask = ({ children, task }: AddTaskProps) => {
  const { title, setTitle, description, setDescription, handleEditSubmit } =
    useTaskManage(task);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>編集画面</DialogTitle>
          <DialogDescription>タスクを編集します。</DialogDescription>
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type='submit' onClick={handleEditSubmit}>
              保存
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
