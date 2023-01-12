import React from 'react'

const BtnClark = () => {
  return (
    <div title='CLARK' className='grid grid-cols-[5px_10px_10px_5px] grid-rows-[15px_15px] gap-y-3'>

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
    <div className='col-span-4 flex justify-center'>
        <div className='bg-white rounded-full h-4 w-1'></div>
    </div>

</div>

  )
}

export default BtnClark