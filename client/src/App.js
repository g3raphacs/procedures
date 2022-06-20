import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuCategorieContext from './store/MenuCategorieStore';

const App = () => {
  return (
    <MenuCategorieContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categorie" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MenuCategorieContext>
  );
};

export default App;