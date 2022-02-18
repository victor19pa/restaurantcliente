import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const NuevoPlatillo = () => {

    //validacion y lectura de datos
    const formik = useFormik({
        initialValues:{
            nombre: '',
            precio: '',
            categoria: '',
            imagen: '',
            descripcion: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                        .min(3, 'Debe tener al menos 3 caracteres')
                        .required('Este campo es obligatorio'),
            precio: Yup.number()
                        .min(1, 'Debe agregar un precio')
                        .required('Este campo es obligatorio'),
            categoria: Yup.string()
                        .required('Este campo es obligatorio'),
            descripcion: Yup.string()
                        .min(5, 'Debe tener mas caracteres')
                        .required('Este campo es obligatorio'),
        }),
        onSubmit: datos => {
            console.log(datos)
        }
    })

    return (  
        <>
            <h1 className='text-3xl font-light mb-4'>
                Agregar platillo
            </h1>
            
            <div className='flex justify-center mt-10'>
                <div className='w-full max-w-3xl'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>Nombre</label>
                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='nombre'
                                type='text'
                                placeholder='Nombre Platillo'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                                <p className='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.nombre}</p>
                            </div>
                        ): null
                        }

                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='precio'>Precio</label>
                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='precio'
                                type='number'
                                placeholder='Precio'
                                min='0'
                                value={formik.values.precio}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                                <p className='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.precio}</p>
                            </div>
                        ): null
                        }

                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='categoria'>Categoria</label>
                            <select
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='categoria'
                                name='categoria'
                                value={formik.values.categoria}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value=''>--Seleccione--</option>
                                <option value=''>Desayuno</option>
                                <option value=''>Almuerzo</option>
                                <option value=''>Cena</option>
                                <option value=''>Bebidas</option>
                                <option value=''>Postres</option>
                                <option value=''>Ensaladas</option>
                            </select>
                        </div>
                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                                <p className='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.categoria}</p>
                            </div>
                        ): null
                        }

                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='imagen'>Imagen</label>
                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='imagen'
                                type='file'
                                value={formik.values.imagen}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='descripcion'>Descripcion</label>
                            <textarea
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40'
                                id='descripcion'
                                placeholder='Descripcion de platillo'
                                value={formik.values.descripcion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </textarea>
                        </div>
                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                                <p className='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.descripcion}</p>
                            </div>
                        ): null
                        }

                        <input 
                            type='submit'
                            className='bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold'
                            value='Agregar platillo'
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default NuevoPlatillo;