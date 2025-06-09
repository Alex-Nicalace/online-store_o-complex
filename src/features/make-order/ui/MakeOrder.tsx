import cn from 'classnames';

import { registerMask } from '@shared/lib';
import { Button, Input } from '@shared/ui';

import cls from './MakeOrder.module.scss';

type MakeOrderProps = {
  className?: string;
};

export default function MakeOrder({ className }: MakeOrderProps) {
  const mask = '+7 (___) ___-__-__';
  const options = { isHideMask: false, setValue: console.log };
  const handlers = registerMask(mask, options);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(' phone', e.currentTarget.phone.value);
  }

  return (
    <form
      className={cn(cls.MakeOrder, className)}
      onSubmit={handleSubmit}
      name="order"
    >
      <Input
        className={cls.input}
        name="phone"
        inputMode="tel"
        type="tel"
        placeholder={mask}
        required
        pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
        {...handlers}
      />
      <Button>заказать</Button>
    </form>
  );
}
