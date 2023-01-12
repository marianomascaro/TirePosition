import React from 'react'
import { useDrop } from 'react-dnd'



const Position = ({children, className, title}) => {
    const [{canDrop, isOver}, drop] = useDrop({
        accept:'image',
        drop: () => ({name: title}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    });

    // console.log("dragging",{isOver, canDrop})

    return (
        <div ref={drop} className={className}>
            {/* {title} */}
            {children}
        </div>
    )
}

export default Position 