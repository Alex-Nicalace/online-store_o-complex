import type React from 'react';
import { store } from '@app/store';
import { Provider } from 'react-redux';
import { NotificationDialogProvider } from '@shared/ui';

interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <NotificationDialogProvider>{children}</NotificationDialogProvider>
    </Provider>
  );
}
