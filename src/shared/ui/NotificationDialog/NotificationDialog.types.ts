export type NotificationType = 'success' | 'error' | 'info';

export type Notification = {
  type: NotificationType;
  message: string;
};

export type NotificationContextType = {
  showNotification: (notification: Notification) => void;
};

export type NotificationDialogProps = {
  children: React.ReactNode;
};
