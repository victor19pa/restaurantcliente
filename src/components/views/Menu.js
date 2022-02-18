import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase'

const Menu = () => {
    const [platillos, setPlatillos ] = useState([])

    const { firebase } = useContext(FirebaseContext)

    //consultar base de datos mediante snapshot
    useEffect(() => {
        const obtenerPlatillos = () => {
            firebase.db.collection('productos').onSnapshot(handleSnapshot);
        }
        obtenerPlatillos()
    },[])

    //snapshot para usar en tiempo real
    function handleSnapshot(snapshot){
        const platillos = snapshot.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        });
        //guardar los platillos
        setPlatillos(platillos)
    }
    
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