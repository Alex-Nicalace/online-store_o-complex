import { MainPage } from '@pages/MainPage';
import './styles/index.scss';
import { Header } from '@widgets/Header';
import { Providers } from './providers';
function App() {
  return (
    <Providers>
      <Header />
      <MainPage />
    </Providers>
  );
}

export default App;
