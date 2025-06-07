import type React from 'react';
import { store } from '@app/store';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
