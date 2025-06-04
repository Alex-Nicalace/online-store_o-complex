import { useMemo } from 'react';
import DOMPurify from 'dompurify';

export function useSanitizedHtml(html: string) {
  return useMemo(() => ({ __html: DOMPurify.sanitize(html) }), [html]);
}
