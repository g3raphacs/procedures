import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import AddProcedure from './components/pages/AddProcedure';

document.title = 'WikiProcédure'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
