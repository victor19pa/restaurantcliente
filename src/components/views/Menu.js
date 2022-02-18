import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <h1 className='text-3xl font-light mb-4'>
                Menu
            </h1>

            <Link className='bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 uppercase text-white font-bold' to='/nuevo-platillo'>
                Agregar platillo
            </Link>
        </>
    );
}
 
export default Menu;