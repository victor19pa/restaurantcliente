import React, {useContext, useRef} from 'react';
import { FirebaseContext } from '../../firebase';

const Platillo = ({platillo}) => {
    //existencia ref para acceder a su valor
    const existenciaRef = useRef(platillo.existencia)

    const { id, nombre, imagen, existencia, categoria, precio, descripcion } = platillo;

    //cambios en base de datos
    const { firebase } = useContext(FirebaseContext)

    //modificar estado en firebase
    const actualizarDisponibilidad = () => {
        //conversion string a boolean
        const existencia = (existenciaRef.current.value === "true");

        //actualizando nuevo estado
        try {
            firebase.db.collection('productos')
                .doc(id)
                .update({
                    existencia
                });
        } catch (error) {
            console.log(error);
        }
        //console.log(typeof existencia)
        //console.log(existenciaRef.current.value)
    }

    return (  
        <>
            <div className='w-full px-3 mb-4'>
                <div className='p-5 shadow-md bg-white'>
                    <div className='lg:flex'>
                        {/**imagen y disponibilidad */}
                        <div className='lg:w-5/12 xl:w-3/12'>
                            
                            <img src={imagen} alt='imagen platillo'/>

                            <div className='sm:flex sm:-mx-2 p-l2'>
                                <label className='block mt-5 sm:w-2/4'>
                                    <span className='block text-gray-800 mb-2'>Existencia</span>

                                    <select 
                                        value={existencia}
                                        className='bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                                        ref={existenciaRef}
                                        onChange={ () => actualizarDisponibilidad() }                                    
                                    >
                                        <option value='true'>Disponible</option>
                                        <option value='false'>No Disponible</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        {/**informacion platillo */}
                        <div className='lg:w-7/12 xl:w-9/12 pl-5'>
                            <p className="font-bold text-2xl text-yellow-600 mb-4">{nombre} </p>
                            <p className="text-gray-600 mb-4">
                                Categor??a: {''}
                                <span className="text-gray-700 font-bold">{categoria.toUpperCase() }</span> 
                            </p>
                            <p className="text-gray-600 mb-4">{descripcion} </p>

                            <p className="text-gray-600 mb-4">
                                Precio: {''}
                                <span className="text-gray-700 font-bold">$ {precio}</span> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Platillo;