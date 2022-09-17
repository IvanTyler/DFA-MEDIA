import { BrowserRouter } from 'react-router-dom';
import { Container } from './Components/Container/Container';
import { Navigation } from './Components/Navigation/Navigation';
import './normalize.css'
import './App.scss'

function App() {

  return (
    <Container>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Container>
  );
}

export default App;
