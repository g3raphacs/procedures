import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuCategorieContext from './store/MenuCategorieStore';
import ModalProcedureContext from './store/ModalProcedureStore';
import ShowProcedureContext from './store/ShowProcedureStore';

const App = () => {
  return (
    <ShowProcedureContext>
      <ModalProcedureContext>
        <MenuCategorieContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </MenuCategorieContext>
      </ModalProcedureContext>
    </ShowProcedureContext>
  );
};

export default App;