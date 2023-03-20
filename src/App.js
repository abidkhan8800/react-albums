import './App.css';
import Albums from './components/albums';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <ToastContainer autoClose={3000}/>
      <Container>
        <Header />
        <Albums />
      </Container>
    </div>
  );
}

export default App;
