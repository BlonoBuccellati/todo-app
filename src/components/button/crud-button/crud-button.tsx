import { Button } from '../../ui/button';

import { useDispatch } from 'react-redux';

const CrudButton = ({
  buttonName,
  action,
}: {
  buttonName: string | undefined;
  action: any;
}) => {
  const dispatch = useDispatch();
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(action);
  };
  return (
    <Button
      className='absolute right-[20rem] group-hover:visible'
      onClick={clickHandler}
    >
      {buttonName}
    </Button>
  );
};

export default CrudButton;
