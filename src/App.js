import React from 'react';
import { Route, Routes } from 'react-router';
import Sidebar from './components/ui/Sidebar';
import Menu from './components/views/Menu';
import NuevoPlatillo from './components/views/NuevoPlatillo';
import Ordenes from './components/views/Ordenes';


function App() {
  return (
    <>
      <div className='md:flex min-h-screen'>
      <Sidebar />        
        <div className='md:w-3/5 xl:w-4/5 p-6'>
          <Routes>
            <Route path='/' element={<Ordenes/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/nuevo-platillo' element={<NuevoPlatillo/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
