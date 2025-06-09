import cn from 'classnames';

import cls from './Cart.module.scss';
import { formatCurrency } from '@shared/lib';

const CART_LIST = [
  {
    id: 1,
    name: 'товар1',
    quantity: 1,
    price: 100,
  },
  {
    id: 2,
    name: 'товар2',
    quantity: 44,
    price: 150,
  },
  {
    id: 3,
    name: 'товар3',
    quantity: 3,
    price: 200,
  },
];

type CartProps = {
  className?: string;
};
export default function Cart({ className }: CartProps) {
  return (
    <ul className={cn(cls.Cart, className)}>
      {CART_LIST.map((item) => (
        <li key={item.id} className={cls.item}>
          <p>{item.name}</p>
          <p>x{item.quantity}</p>
          <p>{formatCurrency(item.price * item.quantity)}</p>
        </li>
      ))}
    </ul>
  );
}
