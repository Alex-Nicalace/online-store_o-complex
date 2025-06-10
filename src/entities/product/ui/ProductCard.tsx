import cn from 'classnames';

import { formatCurrency } from '@shared/lib';
import { Panel } from '@shared/ui';

import cls from './ProductCard.module.scss';
import type { ProductCardProps } from './ProductCard.types';

export default function ProductCard({
  className,
  actionSlot,
  image_url,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <Panel className={cn(cls.card, className)} as="article">
      <h3 className={cls.title}>
        <a className={cls.link} href="#">
          {title}
        </a>
      </h3>
      <img className={cls.image} src={image_url} alt={`Вид товара ${title}`} />
      <p className={cls.description}>{description}</p>
      <span className={cls.price}>
        <span>цена:</span> <span>{formatCurrency(price)}</span>
      </span>
      {actionSlot && <div className={cls.actionSlot}>{actionSlot}</div>}
    </Panel>
  );
}
