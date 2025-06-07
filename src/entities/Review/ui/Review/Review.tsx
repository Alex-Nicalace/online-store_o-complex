import cn from 'classnames';

import { useSanitizedHtml } from '@shared/lib';
import { Panel } from '@shared/ui';
import cls from './Review.module.scss';
import type { ReviewProps } from './Review.types';

export function Review({ html, className }: ReviewProps) {
  const cleanHtml = useSanitizedHtml(html);

  return (
    <Panel
      as="article"
      className={cn(cls.Feedback, className)}
      dangerouslySetInnerHTML={cleanHtml}
    />
  );
}
