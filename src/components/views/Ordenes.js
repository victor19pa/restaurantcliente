import React, { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../../firebase/context';
import Orden from '../ui/Orden';

const Ordenes = () => {

    //context con las operaciones de firebase
    const { firebase } = useContext(FirebaseContext);

    //state ordenes
    const [ ordenes, setOrdenes ] = useState([])
    
    //consulta a firebase
    useEffect(()=>{
        const obtenerOrdenes = () =>{
            firebase.db.collection('ordenes').where('completado',"==", false).onSnapshot(manejarSnapshot)
        }
        obtenerOrdenes()
    },[])

    //llenando ordenes
    function manejarSnapshot(snapshot){
        const ordenes = snapshot.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        });

        setOrdenes(ordenes)
    }
    return (
        <>
            <h1 className='text-3xl font-light mb-4'>
                Ordenes
            </h1>
            <div className='sm:flex sm:flex-wrap -mx-3'>
                {ordenes.map(orden => (
                    <Orden
                        key={orden.id}
                        orden={orden}
                    />
                ))}
            </div>
        </>
    );
}
 
export default Ordenes;