import { type RefObject, useEffect } from 'react';

type UseIntersectionObserverOptions = IntersectionObserverInit & {
  onIntersecting: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void;
};

export function useIntersectionObserver(
  target: RefObject<HTMLElement | null> | null | undefined,
  options: UseIntersectionObserverOptions
) {
  useEffect(
    function manageStateIntersecting() {
      if (!target) return;

      const { onIntersecting, ...rest } = options;

      const element = target.current;

      if (!element) {
        console.warn(
          'Целевой элемент не найден для хука useIntersectionObserver.'
        );
        return;
      }

      const callback: IntersectionObserverCallback = (entries, observer) => {
        // для 1-го наблюдаемого объекта может быть несколько записей,
        // если он пересекает несколько порогов за короткое время => буру последнюю запись
        const [entryLast] = entries.slice(-1);
        onIntersecting(entryLast, observer);
      };

      const observer = new IntersectionObserver(callback, rest);
      observer.observe(element);

      return () => {
        observer.unobserve(element);
        observer.disconnect();
      };
    },
    [target, options]
  );
}
