import React from 'react';
import { Route, Routes } from 'react-router';
import Menu from './components/views/Menu';
import NuevoPlatillo from './components/views/NuevoPlatillo';
import Ordenes from './components/views/Ordenes';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Ordenes/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/nuevo-platillo' element={<NuevoPlatillo/>}/>
      </Routes>
    </>
  );
}

export default App;
