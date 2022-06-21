import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuCategorieContext from './store/MenuCategorieStore';
import ModalProcedureContext from './store/ModalProcedureStore';

const App = () => {
  return (
    <ModalProcedureContext>
      <MenuCategorieContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categorie" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MenuCategorieContext>
    </ModalProcedureContext>
  );
};

export default App;