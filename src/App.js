import './App.css';
import Albums from './components/albums';
import Container from '@mui/material/Container';
import Header from './components/Header/Header'

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <Albums />
      </Container>
    </div>
  );
}

export default App;
