import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Earth from './components/common/earth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Earth />} />
        <Route path='/:moniker' element={<Earth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
