import cn from 'classnames';

import { Review } from '@entities/Review';
import cls from './LoadReviews.module.scss';
import type { LoadReviewsProps } from './LoadReviews.types';
import { Container } from '@shared/ui';

const FEED_BACK_HTML = [
  {
    id: 1,
    text: '<h1>Отличный магазин!</h1><p>Быстрая доставка, хорошее качество товаров.</p>',
  },
  {
    id: 2,
    text: '<h1>Рекомендую</h1><p>Приятные цены и большой ассортимент.</p>',
  },
  {
    id: 3,
    text: '<h1>Неплохо</h1><p>Есть небольшие проблемы с упаковкой, но в целом нормально.</p>',
  },
];

function LoadReviews({ className }: LoadReviewsProps) {
  return (
    <Container as="section" narrow className={cn(cls.LoadReviews, className)}>
      {FEED_BACK_HTML.map((item) => (
        <Review key={item.id} html={item.text} className={cls.review} />
      ))}
    </Container>
  );
}

export default LoadReviews;
