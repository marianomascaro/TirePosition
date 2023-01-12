import React from 'react';
import { useDrag } from 'react-dnd';

export function Picture({url, id}) {

    const changeItemColumn = (currentItem, columnName) => {
        setItems ((prevState) => {
          return prevState.map(e => {
            return {
              ...e,
              column: e.name === currentItem.name ? columnName : e.column,
            }
          })
        })
      }

    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id, url: url},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult && dropResult.name === 'Column 1'){
                changeItemColumn(item,'Column 1')
            } else {
                changeItemColumn(item,'Column 2');
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <>
            <img className='my-3 mx-auto' ref={drag} src={url} width={"75px"} style={{opacity: isDragging ? "0%" : "100%"}}/>
        </>
    )
}
