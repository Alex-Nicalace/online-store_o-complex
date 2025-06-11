import cn from 'classnames';
import { useEffect, useRef } from 'react';

import { fetchNextProductPage, selectProductList } from '@entities/product';
import {
  useAppDispatch,
  useAppSelector,
  useIntersectionObserver,
} from '@shared/lib';
import { Loader } from '@shared/ui';

import { ProductCard } from '../ProductCard';
import cls from './ProductList.module.scss';
import type { ProductListProps } from './ProductList.types';

export function ProductList({
  className,
  renderActionSlotItem,
}: ProductListProps) {
  const dispatch = useAppDispatch();
  const { products, isLoading, hasMore } = useAppSelector(selectProductList);
  const divLoadMoreRef = useRef<HTMLDivElement>(null);
  const canLoadMore = products.length > 0 && !isLoading && hasMore;

  useEffect(
    function loadFirstPage() {
      const promise = dispatch(fetchNextProductPage());

      return () => {
        promise.abort();
      };
    },
    [dispatch]
  );

  useIntersectionObserver(canLoadMore ? divLoadMoreRef : null, {
    onIntersecting: ({ isIntersecting }) => {
      if (!isIntersecting) return;
      dispatch(fetchNextProductPage());
    },
  });

  return (
    <div className={cn(cls.ProductList, className)}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          className={cls.item}
          {...product}
          actionSlot={renderActionSlotItem?.(product)}
        />
      ))}
      {isLoading && <Loader className={cls.item} />}
      {canLoadMore && <div className={cls.item} ref={divLoadMoreRef} />}
    </div>
  );
}
