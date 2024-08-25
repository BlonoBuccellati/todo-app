import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface TaskDialogHeaderProps {
  title: string;
  description: string;
}
const TaskDialogHeader = ({ title, description }: TaskDialogHeaderProps) => {
  return (
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
  );
};

export default TaskDialogHeader;
