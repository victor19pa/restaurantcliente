import React, { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../../firebase/context';

const Orden = ({ orden }) => {
    //state
    const [tiempoentrega, setTiempoEntrega] = useState(0)
    //useeffect

    //context
    const { firebase } = useContext(FirebaseContext)

    //definir tiempo de entrega en tiempo real firebase
    const definirTiempo = (id) => {
        try {
            firebase.db.collection('ordenes')
                .doc(id)
                .update({
                    tiempoentrega
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='sm:w-1/2 lg:w-1/3 px-2 mb-4'>
            <div className='p-3 shadow-md bg-white'>
                <h1 className='text-yellow-600 text-lg font-bold'> {orden.id}</h1>
                {orden.orden.map(platillos => (
                    <p className='text-gray-600'>{platillos.cantidad} {platillos.nombre}</p>
                ))}
                <p className='text-gray-700 font-bold'> Total a Pagar: L{orden.total} </p>

                {orden.tiempoentrega === 0 && (
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Tiempo de Entrega
                        </label>
                        <input
                            type='number'
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            min='1'
                            max='20'
                            placeholder='20'
                            value={tiempoentrega}
                            onChange={(e) => setTiempoEntrega(parseInt(e.target.value))}
                        />
                        <button
                            type='submit'
                            className='hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold bg-indigo-800'
                            onClick={() => definirTiempo(orden.id)}
                        >
                            Definir tiempo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Orden;