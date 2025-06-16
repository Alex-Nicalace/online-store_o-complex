import { useContext } from 'react';
import { NotificationContext } from './NotificationDialogContext';

export function useNotification() {
  const context = useContext(NotificationContext);

  if (context === null) {
    throw new Error(
      'useNotification must be used within a NotificationDialogProvider'
    );
  }

  return context;
}
