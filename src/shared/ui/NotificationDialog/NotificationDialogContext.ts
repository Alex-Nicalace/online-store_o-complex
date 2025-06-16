import { createContext } from 'react';
import type { NotificationContextType } from './NotificationDialog.types';

export const NotificationContext = createContext<NotificationContextType>({
  showNotification: () => {},
});
