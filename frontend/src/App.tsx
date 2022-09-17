import { BrowserRouter } from 'react-router-dom';
import { Container } from './Components/Container/Container';
import { Navigation } from './Components/Navigation/Navigation';
import './normalize.css'
import './App.scss'
import { WrapperContent } from './Components/WrapperContent/WrapperContent';
import { Header } from './Components/Header/Header';
import { Posts } from './Components/Posts/Posts';

function App() {

  return (
    <Container>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      <WrapperContent>
        <Header />
        <Posts />
      </WrapperContent>
    </Container>
  );
}

export default App;
