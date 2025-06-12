import { selectHasItemById } from '@entities/Cart';
import { useAppSelector } from '@shared/lib';

import { AddToCartButton } from '../AddToCartButton';
import { CartQuantityControl } from '../CartQuantityControl';
import type { AddToCartProps } from './AddToCart.types';

export function AddToCart(props: AddToCartProps) {
  const { productId } = props;
  const isInCart = useAppSelector(selectHasItemById(productId));

  if (isInCart) {
    return <CartQuantityControl productId={productId} />;
  }

  return <AddToCartButton {...props} />;
}
