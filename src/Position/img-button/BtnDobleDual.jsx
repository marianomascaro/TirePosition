import React from 'react'

const BtnDobleDual = () => {
  return (
    <div title='CAMION DOBLE DUAL' className='grid grid-cols-[5px_5px_10px_10px_5px_5px] grid-rows-[15px_5px_15px_15px] gap-y-1'>

        {/* EJE DELANTERO */}
        <div></div>
        <div className='bg-white rounded-full ml-px'></div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='bg-white rounded-full mr-px'></div>
        <div></div>

        {/* SEPARACIÓN ENTRE EJES */}
        <div className='col-span-6'></div>

        {/* EJE TRASERO */}
        <div className='bg-white rounded-full mr-px'></div>
        <div className='bg-white rounded-full ml-px'></div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='bg-white rounded-full mr-px'></div>
        <div className='bg-white rounded-full ml-px'></div>

        {/* EJE TRASERO DUAL*/}
        <div className='bg-white rounded-full mr-px'></div>
        <div className='bg-white rounded-full ml-px'></div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='bg-white rounded-full mr-px'></div>
        <div className='bg-white rounded-full ml-px'></div>

    </div>
  )
}

export default BtnDobleDual