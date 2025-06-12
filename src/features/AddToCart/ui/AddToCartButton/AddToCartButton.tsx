import { addItem } from '@entities/Cart';
import { useAppDispatch } from '@shared/lib';
import { Button } from '@shared/ui';

import type { AddToCartButtonProps } from './AddToCartButton.types';

export default function AddToCartButton(props: AddToCartButtonProps) {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(addItem(props));
  }
  return <Button onClick={handleClick}>купить</Button>;
}
