import { MainPage } from '@pages/MainPage';
import { Header } from '@widgets/Header';
import { Providers } from '@app/providers';

import './styles/index.scss';

function App() {
  return (
    <Providers>
      <Header />
      <MainPage />
    </Providers>
  );
}

export default App;
