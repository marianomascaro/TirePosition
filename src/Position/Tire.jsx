import React, { useRef, useState } from 'react'
import { useDrag } from 'react-dnd'
import ImgTire from './img-tire/ImgTire'


const Tire = ({tire, tires, index, setItems}) => {

    const ref = useRef(null)

    const changeItemColumn = (currentItem, columnName) => {
        setItems((prevState) => {
            // console.log(prevState)
            return prevState.map( e => {
                // console.log(e)
                return {
                    ...e,
                    position: e._id === currentItem._id ? columnName : e.position,
                }
            })
        })
    }

    const [{isDragging}, drag] = useDrag({
        type: 'image',
        item: tire,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            console.log('--------',dropResult.name)
            tires.forEach(ti => {
                if (ti.position == dropResult.name) {
                    changeItemColumn(ti, item.position)
                }
            });
            console.log(item)
            if(dropResult){
                changeItemColumn(item, dropResult.name)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;
    drag(ref);

    return (
        <div ref={ref} className='movable-item relative overflow-hidden' style={{opacity}}>
            <div className='text-ch text-center bg-white absolute bottom-10'>
                {tire.model}    
            </div>
            { tire.imagen && 
                <img className='h-16 w-16 m-auto' src={tire.imagen}></img>
            }
            { !tire.imagen && 
                <ImgTire />
            }
        </div>
    )
}

export default Tire

