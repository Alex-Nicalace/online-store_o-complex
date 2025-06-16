import { useState } from 'react';
import cn from 'classnames';

import { selectCartList } from '@entities/Cart';
import { createOrder } from '@shared/api';
import {
  registerMask,
  useAppSelector,
  useLocalStorageState,
} from '@shared/lib';
import { Button, Input } from '@shared/ui';

import { useMapCartItemsToOrderCartEntitys } from '../lib';
import cls from './MakeOrder.module.scss';

type MakeOrderProps = {
  className?: string;
};

export default function MakeOrder({ className }: MakeOrderProps) {
  const [phone, setPhone] = useLocalStorageState('', 'order-phone');
  const cartList = useAppSelector(selectCartList);
  const cart = useMapCartItemsToOrderCartEntitys(cartList);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mask = '+7 (___) ___-__-__';
  const regexp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  const options = { isHideMask: false, setValue: setPhone };
  const handlers = registerMask(mask, options);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dataToSend = { phone: phone.replace(/\D/g, ''), cart };
    setIsSubmitting(true);
    try {
      const response = await createOrder(dataToSend);
      if (!response.success) throw new Error(response.error);
      console.log(response);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
    setIsSubmitting(false);
  }

  return (
    <form
      className={cn(cls.MakeOrder, className)}
      onSubmit={handleSubmit}
      name="createOrder"
    >
      <label htmlFor="phone" className="sr-only">
        Введите номер телефона
      </label>
      <Input
        id="phone"
        className={cls.input}
        name="phone"
        inputMode="tel"
        type="tel"
        placeholder={mask}
        required
        pattern={regexp.source}
        defaultValue={phone}
        disabled={isSubmitting}
        {...handlers}
      />
      <Button isPending={isSubmitting}>заказать</Button>
    </form>
  );
}
