import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuCategorieContext from './store/MenuCategorieStore';
import ChooseCategorieContext from './store/ChooseCategorieStore';
import ProcedureContext from './store/ProcedureStore';
import CategorieContext from './store/CategorieStore';

const App = () => {
  return (
    <ChooseCategorieContext>
          <MenuCategorieContext>
            <CategorieContext>
              <ProcedureContext>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </BrowserRouter>
              </ProcedureContext>
            </CategorieContext>
          </MenuCategorieContext>
    </ChooseCategorieContext>
  );
};

export default App;