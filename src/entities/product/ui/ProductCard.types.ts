import type { JSX } from 'react';
import type { Product } from '@shared/api';

export type ProductCardProps = Product & {
  className?: string;
  actionSlot?: JSX.Element;
};
