import { useMemo } from 'react';
import DOMPurify from 'dompurify';

/**
 * Санитизирует HTML строку с помощью DOMPurify, предотвращая XSS-атаки.
 * @param html - Исходный HTML (может быть небезопасным).
 * @returns Объект с ключом `__html` для использования в dangerouslySetInnerHTML.
 */
export function useSanitizedHtml(html: string) {
  return useMemo(() => ({ __html: DOMPurify.sanitize(html) }), [html]);
}
