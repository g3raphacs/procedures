import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import AddProcedure from './components/pages/AddProcedure';
import logo from './logo.png';

document.title = 'WikiProcédure'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='addprocedure' element={<AddProcedure />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
