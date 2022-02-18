import React from 'react';
import { Route, Routes } from 'react-router';
import Ordenes from './components/views/Ordenes';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Ordenes/>}/>
      </Routes>
    </>
  );
}

export default App;
