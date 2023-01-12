import React from 'react'
import { useDrop } from 'react-dnd'
import { Picture } from './Picture'

const Rueda = ({children, className, title}) => {

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: () => ({name: title}),

/*         collect: (monitor) => ({
            isOver:
                !!monitor.isOver(),
        }), */
    }))

  return (
    <div className={estilos} 
    ref={drop}>
        <div>
            <Picture url={url} id={id} />
        {/* {isOver && 
            <div className='w-full h-full bg-yellow-300/50'>{descripcion}</div>
        } */}
        </div>
    </div>
  )
}

export default Rueda