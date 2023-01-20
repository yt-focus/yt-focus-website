import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Help from './pages/Help/Help';
import Privacy from './pages/Privacy/Privacy';

function App() {
  return (
    <div className='main-gate'>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="*" element={<HomePage/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
