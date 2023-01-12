import React from 'react'

const BtnEjeSimple = () => {
  return (
    <div title='EJE SIMPLE' className='grid grid-cols-[5px_10px_10px_5px] grid-rows-[15px_15px] gap-y-4'>

        {/* EJE DELANTERO */}
        <div className='bg-white rounded-full ml-px'></div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='bg-white rounded-full mr-px'></div>

        {/* EJE TRASERO */}
        <div className='bg-white rounded-full ml-px'></div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='grid content-center'>
            <div className='bg-white h-1 my-auto'></div>
        </div>
        <div className='bg-white rounded-full mr-px'></div>

    </div>
    
  )
}

export default BtnEjeSimple