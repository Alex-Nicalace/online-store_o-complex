import type { JSX } from 'react';
import type { Product } from '@shared/api';

export type ProductListProps = {
  className?: string;
  renderActionSlotItem?: (value: Product) => JSX.Element;
};
