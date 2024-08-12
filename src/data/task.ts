import { todoProps } from '@/types/todo-type';
export const tasks: todoProps[] = [
  {
    id: 1,
    title: 'Buy groceries',
    description: 'Milk, Bread, Eggs, Fruits',
    completed: false,
  },
  {
    id: 2,
    title: 'Read a book',
    description: "Finish reading 'The Great Gatsby'",
    completed: true,
  },
  {
    id: 3,
    title: 'Workout',
    description: '30 minutes of running and stretching',
    completed: false,
  },
];
