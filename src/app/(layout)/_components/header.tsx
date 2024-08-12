import { cn } from '@/lib/utils';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

const font = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});
const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full overflow-hidden backdrop-blur-md'>
      <header className='h-16 flex items-center border p-4'>
        <Image src='todo-icon.svg' alt='todoアプリ' width={30} height={30} />
        <span className={cn('text-3xl', font.className)}>Todoアプリ</span>
      </header>
    </div>
  );
};

export default Header;
