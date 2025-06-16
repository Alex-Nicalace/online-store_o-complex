import { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { Button } from '../Button';
import cls from './NotificationDialog.module.scss';
import type {
  Notification,
  NotificationDialogProps,
} from './NotificationDialog.types';
import { NotificationContext } from './NotificationDialogContext';
import { Panel } from '../Box';

export function NotificationDialogProvider({
  children,
}: NotificationDialogProps) {
  const [notification, setNotification] = useState<Notification | null>(null);
  const dealogRef = useRef<HTMLDialogElement>(null);

  const showNotification = useCallback((data: Notification) => {
    setNotification(data);
    // setTimeout(() => setNotification(null), 3000); // авто-закрытие
  }, []);

  useEffect(() => {
    if (notification) {
      dealogRef.current?.showModal();
    }
  }, [notification]);

  return (
    <NotificationContext value={{ showNotification }}>
      {children}
      {notification && (
        <dialog
          ref={dealogRef}
          className={cn(cls.notification, cls[notification.type])}
        >
          <Panel className={cls.panel}>
            <p>
              {notification.type === 'success' && '✅'}
              {notification.type === 'error' && '❌'}
              {notification.message}
            </p>
            <Button onClick={() => setNotification(null)}>закрыть</Button>
          </Panel>
        </dialog>
      )}
    </NotificationContext>
  );
}
