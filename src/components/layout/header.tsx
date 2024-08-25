'use client';

import { cn } from '@/lib/utils';
import { toggleAll } from '@/store/slices/item-button-status-slice';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch } from 'react-redux';

const font = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});
const Header = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    const action = toggleAll();
    dispatch(action);
  };
  return (
    <div className='fixed top-0 left-0 w-full overflow-hidden backdrop-blur-md'>
      <Link href='/'>
        <header className='h-16 flex items-center border p-4'>
          <div onClick={clickHandler}>
            <Image
              src='todo-icon.svg'
              alt='todoアプリ'
              width={30}
              height={30}
            />
            <span className={cn('text-3xl', font.className)}>Todoアプリ</span>
          </div>
        </header>
      </Link>
    </div>
  );
};

export default Header;
