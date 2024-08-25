import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TaskDialogFooterProps {
  buttonName: string;
  onClickSubmit: () => void;
}
const TaskDialogFooter = ({
  buttonName,
  onClickSubmit,
}: TaskDialogFooterProps) => {
  return (
    <DialogFooter>
      <DialogClose>
        <Button type='submit' onClick={onClickSubmit}>
          {buttonName}
        </Button>
      </DialogClose>
    </DialogFooter>
  );
};

export default TaskDialogFooter;
