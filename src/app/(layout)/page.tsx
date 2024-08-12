import Image from 'next/image';

export default async function Home() {
  const data = await fetch('http://localhost:3003/tasks');
  const tasks = await data.json();
  console.log(tasks);
  return (
    <div className='text-center m-4 w-[600px]'>
      {tasks.map((task: any) => {
        return (
          <div
            key={task.id}
            className='my-8 break-words shadow rounded-md py-6'
          >
            <div className='text-xl'>{task.title}</div>
            <div className='pt-5 text-sm'>{task.description}</div>
          </div>
        );
      })}
    </div>
  );
}
