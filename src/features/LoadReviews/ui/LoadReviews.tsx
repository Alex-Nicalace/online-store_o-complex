import cn from 'classnames';

import { Review } from '@entities/Review';
import Container from '@shared/ui/Container';
import cls from './LoadReviews.module.scss';
import type { LoadReviewsProps } from './LoadReviews.types';

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
    <Container
      tag="section"
      isNarrow
      className={cn(cls.LoadReviews, className)}
    >
      {FEED_BACK_HTML.map((item) => (
        <Review key={item.id} html={item.text} className={cls.review} />
      ))}
    </Container>
  );
}

export default LoadReviews;
