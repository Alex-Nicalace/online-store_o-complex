import { useActionState, useEffect } from 'react';
import cn from 'classnames';

import { clear, selectCartList } from '@entities/Cart';
import { createOrder, type OrderCartEntity } from '@shared/api';
import {
  registerMask,
  useAppDispatch,
  useAppSelector,
  useLocalStorageState,
} from '@shared/lib';
import { Button, Input, useNotification } from '@shared/ui';

import { useMapCartItemsToOrderCartEntitys } from '../lib';
import cls from './MakeOrder.module.scss';

interface SubmitStatus {
  success: boolean;
  message: string;
}
interface SubmitPayload {
  phone: string;
  cart: OrderCartEntity[];
}

// Функция обработки отправки данных
async function handleDataSend(_: SubmitStatus | null, payload: SubmitPayload) {
  try {
    const response = await createOrder(payload);
    if (response.success) {
      return { success: true, message: 'Заказ успешно создан' };
    } else return { success: false, message: response.error };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: 'Unknown error' };
    }
  }
}

type MakeOrderProps = {
  className?: string;
};
export default function MakeOrder({ className }: MakeOrderProps) {
  const [phone, setPhone] = useLocalStorageState('', 'order-phone');
  const cartList = useAppSelector(selectCartList);
  const cart = useMapCartItemsToOrderCartEntitys(cartList);
  const { showNotification } = useNotification();
  const dispatch = useAppDispatch();
  const [submitStatus, submitAction, isSubmitting] = useActionState<
    SubmitStatus | null,
    SubmitPayload
  >(handleDataSend, null);

  const mask = '+7 (___) ___-__-__';
  const regexp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  const options = { isHideMask: false, setValue: setPhone };
  const handlers = registerMask(mask, options);

  useEffect(() => {
    if (submitStatus) {
      showNotification({
        type: submitStatus.success ? 'success' : 'error',
        message: submitStatus.message,
      });
      if (submitStatus.success) {
        dispatch(clear());
      }
    }
  }, [submitStatus, dispatch, showNotification]);

  function handleAction() {
    const dataToSend = { phone: phone.replace(/\D/g, ''), cart };
    submitAction(dataToSend);
  }

  return (
    <form
      className={cn(cls.MakeOrder, className)}
      action={handleAction}
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
