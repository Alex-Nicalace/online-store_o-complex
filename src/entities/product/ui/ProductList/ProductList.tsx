import cn from 'classnames';
import { useEffect } from 'react';

import { fetchNextProductPage, selectProductList } from '@entities/product';
import { useAppDispatch, useAppSelector } from '@shared/lib';
import { Loader } from '@shared/ui';

import { ProductCard } from '../ProductCard';
import cls from './ProductList.module.scss';
import type { ProductListProps } from './ProductList.types';

export function ProductList({
  className,
  renderActionSlotItem,
}: ProductListProps) {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector(selectProductList);

  useEffect(() => {
    const promise = dispatch(fetchNextProductPage());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <button onClick={() => dispatch(fetchNextProductPage())}>
        Загрузить еще
      </button>
      <div className={cn(cls.ProductList, className)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className={cls.item}
            {...product}
            actionSlot={renderActionSlotItem?.(product)}
          />
        ))}
      </div>
    </div>
  );
}
