import React from 'react'
import Position from '../Position'

const EjeSimple = ({returnItemsForColumn}) => {
  return (
    <div className='vehicle grid-rows-[96px_112px_56px_112px_112px]' >
      <div className='col-span-5 mb-3'>
          <div className='patente-texto'>Patente:{''}
              <div className='patente-nro'>AA123BC</div>
          </div>
          <div className='interno-texto'>Interno:{''}
              <div className='interno-nro'>123</div>
          </div>
      </div>
      <div></div>
          <Position title='DI' className='box-tire'>
              {returnItemsForColumn('DI')}
          </Position>
      <div className='bg-gray-300 border-solid border-black border-2 rounded-t-3xl h-28'>
          <div className='bg-amber-900 h-4 mt-12 border-black border-2'></div>
      </div>
          <Position title='DD' className='box-tire'>
              {returnItemsForColumn('DD')}
          </Position>
      <div></div>
      <div></div>
      <div></div>
      <div className='bg-gray-300 border-solid border-black border-x-2 border-t-2 h-14'></div>
      <div></div>
      <div></div>
      <div></div>
          <Position title='TI' className='box-tire'>
              {returnItemsForColumn('TI')}
          </Position>
      <div className='bg-gray-300 border-solid border-black border-x-2 border-b-2 h-28'>
          <div className='bg-amber-900 h-4 mt-12 border-black border-2'></div>
      </div>
          <Position title='TD' className='box-tire'>
              {returnItemsForColumn('TD')}
          </Position>
      <div></div>
      <Position title='AUXILIO' className='box-tire col-span-5 w-20 mx-auto'>
          {returnItemsForColumn('AUXILIO')}
      </Position>
      </div>
  )
}

export default EjeSimple