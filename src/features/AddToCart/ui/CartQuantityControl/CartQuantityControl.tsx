import cn from 'classnames';

import {
  decrementItem,
  incrementItem,
  selectQuantityById,
  setQuantityById,
} from '@entities/Cart';
import { useAppDispatch, useAppSelector } from '@shared/lib';
import { Button, Input } from '@shared/ui';

import cls from './CartQuantityControl.module.scss';
import type { CartQuantityControlProps } from './CartQuantityControl.types';

export function CartQuantityControl({
  productId,
  className,
}: CartQuantityControlProps) {
  const quantity = useAppSelector(selectQuantityById(productId));
  const dispatch = useAppDispatch();

  function handleClickDecrement() {
    dispatch(decrementItem(productId));
  }

  function handleClickIncrement() {
    dispatch(incrementItem(productId));
  }

  function handleChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value.replace(/[^0-9]/g, ''));
    dispatch(setQuantityById({ id: productId, quantity: value }));
  }

  return (
    <div className={cn(cls.CartQuantityControl, className)}>
      <Button className={cls.button} onClick={handleClickDecrement}>
        -
      </Button>
      <Input
        className={cls.input}
        inputMode="numeric"
        value={quantity}
        onChange={handleChangeQuantity}
      />
      {/* <div className={cls.input}>12</div> */}
      <Button className={cls.button} onClick={handleClickIncrement}>
        +
      </Button>
    </div>
  );
}
