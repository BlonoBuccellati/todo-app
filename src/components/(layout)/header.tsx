'use client';

import { useStatusDispatch } from '@/context/todo-status-context';
import { cn } from '@/lib/utils';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const font = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});
const Header = () => {
  const statusDispatch = useStatusDispatch();

  const clickHandler = () => {
    statusDispatch({ payload: { type: undefined } });
  };
  return (
    <div className='fixed top-0 left-0 w-full overflow-hidden backdrop-blur-md'>
      <Link href='/' onClick={clickHandler}>
        <header className='h-16 flex items-center border p-4'>
          <Image src='todo-icon.svg' alt='todoアプリ' width={30} height={30} />
          <span className={cn('text-3xl', font.className)}>Todoアプリ</span>
        </header>
      </Link>
    </div>
  );
};

export default Header;
