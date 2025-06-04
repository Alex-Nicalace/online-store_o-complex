import cn from 'classnames';

import { useSanitizedHtml } from '@shared/lib/html';
import cls from './Review.module.scss';
import type { ReviewProps } from './Review.types';

function Review({ html, className }: ReviewProps) {
  const cleanHtml = useSanitizedHtml(html);

  return (
    <article
      className={cn(cls.Feedback, className)}
      dangerouslySetInnerHTML={cleanHtml}
    ></article>
  );
}

export default Review;
