import Header from './_components/header';
import Sidebar from './_components/sidebar';

interface TodoLayoutProps {
  children: React.ReactNode;
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  return (
    <main className='h-full bg-slate-50 mt-16'>
      <div className='flex flex-col h-full'>
        <Header />
        <div className='flex flex-row h-full'>
          <div className='w-60 hidden sm:block'>
            <Sidebar />
          </div>
          <div className='h-full'>{children}</div>
        </div>
      </div>
    </main>
  );
};
export default TodoLayout;
