import cn from 'classnames';

import { formatCurrency, useAppSelector } from '@shared/lib';
import { selectCartList } from '../model';

import cls from './Cart.module.scss';
import type { CartProps } from './Cart.types';

export default function Cart({ className }: CartProps) {
  const itemsCart = useAppSelector(selectCartList);

  return (
    <ul className={cn(cls.Cart, className)}>
      {itemsCart.map((item) => (
        <li key={item.productId} className={cls.item}>
          <p>{item.name}</p>
          <p>x{item.quantity}</p>
          <p>{formatCurrency(item.price * item.quantity)}</p>
        </li>
      ))}
    </ul>
  );
}
