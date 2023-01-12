import React, { useState } from 'react'
import { Picture } from './Picture'
import Rueda from './Rueda'

function Dragdrop() {

    const [items, setItems] = useState([
        {
            id: 1,
            url: "https://www.noticiasmaquinaria.com/wp-content/uploads/2022/10/noticias-maquinaria-MICHELIN-X-MULTI-HD-Z_-el-neumatico-de-camion.jpg",
            column: "disponible"
            //cargado:false
        },
        {
            id: 2,
            url: "https://imgs.search.brave.com/1hlraUDvv0bb3ug5xJONnMLoE6QwEVrgn7twyUHRV-g/rs:fit:449:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/ZVV3OXNnRkdsd1pL/NGlJd3REMER3SGFI/MCZwaWQ9QXBp",
            column: "disponible"
            //cargado:false
        },
        {
            id: 3,
            url: "https://imgs.search.brave.com/4Pnx9JimZ2TAa26ebYiV1KbvvSEGPZN5tDAv14u1nrc/rs:fit:446:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/OGRoMlNRbmdEQ3U4/eWh5WFNYLTlBSGFI/MyZwaWQ9QXBp",
            column: "disponible"
            //cargado:false
        },
        {
            id: 4,
            url: "https://imgs.search.brave.com/tUzW-z-QVVOROHwctAWzk2z5eVvrNuHgMLRKCL5BHRg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/Uk1RcWcyTEkyMS1n/MkFnd3dseFlBSGFI/YSZwaWQ9QXBp",
            column: "disponible"
            // cargado:false
        },
    ])



/*     const [dragList, setDragList] = useState(_dragList)
    const [board, setBoard] = useState([])
    const [pictures, setPictures] = useState([])
    const [boardImages, setBoardImages] = useState([])
 
    useEffect(() => {
        const difference=(arr1, arr2) => {
            var existe = false
            var n = []
            for(var i=0;i<arr1.length;i++)
            {
              for(var j=0;j<arr2.length;j++)
              {
                if(arr1[i].id===arr2[j].id)
                  { existe=true
                    break
                  };
               if(existe) { break }
              }
              n.push({ id:arr1[i].id, url:arr1[i].url, cargado:existe }) 
              existe=false
            }
            return n
          }

        console.log(pictures)

        const aux = difference(dragList,board)
        console.log('aux',aux)
        console.log('board',board)
        console.log('dragList',dragList)

        setPictures( aux.map(picture => <Picture url={picture.url} id={picture.id} cargado={picture.cargado} />) )
        console.log('pictures',pictures)
        setBoardImages(board.map(picture => <Picture url={picture.url} id={picture.id} cargado={picture.cargado} />) )
        console.log('board',board)
        console.log('dragList',dragList)

    }, [board])
    console.log(boardImages) */

    const returnItemsForColumn = (colunmName) => {
        return items
            .filter ((item) => item.column === colunmName)
            .map((item) => (
              <Picture key={item.id} url={item.url} setItems={setItems} />
            ))
      }
    
    return (
        <div className='flex flex-row mt-10'>
            <div className='h-full flex flex-col basis-1/5 border-solid border-2 border-gray-900 mt-7'>
                {returnItemsForColumn('disponible')}
            </div>
            <div className='grid grid-cols-[80px_80px_160px_80px_80px] mx-auto' >
                <div className='col-span-5 mb-3'>
                    <div className='flex mr-2 text-xl font-bold justify-center mb-3 items-center'>Patente:{''}
                      <div className='bg-black uppercase font-sans text-white text-xl p-1 border-solid rounded-md ml-1 px-2'>AA123BC</div>
                    </div>
                    <div className='flex mr-2 text-xl font-bold justify-center items-center'>Interno:{''}
                        <div className='bg-white uppercase font-sans text-xl p-1 border-solid border-black border-2 rounded-full ml-1'>123</div>
                    </div>
                 </div>
                <div></div>
                    <Rueda descripcion={"Delantero Izquierdo"} estilos={"h-28 flex justify-end items-center border-dashed border-2 border-indigo-600"}/>
                <div className='bg-gray-300 border-solid border-black border-2 rounded-t-3xl h-28'>
                    <div className='bg-amber-900 h-4 mt-12 border-black border-2'></div>
                </div>
                    <Rueda descripcion={"Delantero Derecho"} estilos={"h-28 flex items-center border-dashed border-2 border-indigo-600"}/>
                <div></div>
                <div></div>
                <div></div>
                <div className='bg-gray-300 border-solid border-black border-x-2 border-t-2 h-14'></div>
                <div></div>
                <div></div>
                    <Rueda descripcion={"Trasero Externo Izquierdo"} estilos={"h-28 flex justify-end items-center border-dashed border-t-2 border-l-2 border-b-2 border-indigo-600"}/>
                    <Rueda descripcion={"Trasero Interno Izquierdo"} estilos={"h-28 flex justify-end items-center border-dashed border-2 border-indigo-600"}/>
                <div className='bg-gray-300 border-solid border-black border-x-2 h-28'>
                    <div className='bg-amber-900 h-4 mt-12 border-black border-2'></div>
                </div>
                    <Rueda descripcion={"Trasero Interno Derecho"} estilos={"h-28 flex items-center border-dashed border-2 border-indigo-600"}/>
                    <Rueda descripcion={"Trasero Externo Derecho"} estilos={"h-28 flex items-center border-dashed border-t-2 border-r-2 border-b-2 border-indigo-600"}/>
                    <Rueda descripcion={"Trasero Externo Izquierdo"} estilos={"h-28 flex justify-end items-center border-dashed border-l-2 border-b-2 border-indigo-600"}/>
                    <Rueda descripcion={"Trasero Interno Izquierdo"} estilos={"h-28 flex justify-end items-center border-dashed border-l-2 border-b-2 border-r-2 border-indigo-600"}/>
                <div className='bg-gray-300 border-solid border-black border-x-2 border-b-2 h-28'>
                    <div className='bg-amber-900 h-4 mt-12 border-black border-2'></div>
                </div>
                    <Rueda descripcion={"Trasero Interno Derecho"} estilos={"h-28 flex items-center border-dashed border-l-2 border-b-2 border-r-2 border-indigo-600"}/>
                    <Rueda descripcion={"Trasero Externo Derecho"} estilos={"h-28 flex items-center border-dashed border-b-2 border-r-2 border-indigo-600"}/>
            </div>
        </div>
    )
}

export default Dragdrop