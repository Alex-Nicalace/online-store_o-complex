import cn from 'classnames';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@shared/lib';
import { Loader } from '@shared/ui';
import { fetchReviewList, selectReviewList } from '../../model';
import { Review } from '../Review';

import cls from './ReviewList.module.scss';
import type { ReviewListProps } from './ReviewList.types';

export function ReviewList({ className }: ReviewListProps) {
  const { reviews, isLoading } = useAppSelector(selectReviewList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviewList());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={cn(cls.ReviewList, className)}>
      {reviews.map((item) => (
        <li key={item.id} className={cls.item}>
          <Review html={item.text} />
        </li>
      ))}
    </ul>
  );
}
