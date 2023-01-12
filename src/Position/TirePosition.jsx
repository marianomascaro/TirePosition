import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './TirePosition.css'
import Position from './Position'
import Tire from './Tire'

import EjeSimple from './vehicles/EjeSimple'
import EjeDual from './vehicles/EjeDual'
import DobleDual from './vehicles/DobleDual'
//import Acoplado from './vehicles/Acoplado'
import Clark from './vehicles/Clark'


import BtnEjeSimple from './img-button/BtnEjeSimple'
import BtnEjeDual from './img-button/BtnEjeDual'
import BtnDobleDual from './img-button/BtnDobleDual'
//import BtnAcoplado from './img-button/BtnAcoplado'
import BtnClark from './img-button/BtnClark'

import ConfirmModal from '../components/ConfirmModal'

import { ChevronLeftIcon } from '@heroicons/react/20/solid'


const TirePosition = () => {
    
    const [type, setType] = useState("dual")
    const [typeP, setTypeP] = useState("dual")
    const [tires, setTires] = useState([
        {
        _id: "63a5aa787b207a66b9aff4b6",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "ABS3512367HDS124121",
        brand: "ANDAPALLAA",
        model: "BOBOBO BOBO",
        supplier: "MESSIRVEEE",
        expiration: 1703203200,
        advance_notice: 40,
        life_cycle: 10000,
        position: "disponible",
        imagen: "https://www.noticiasmaquinaria.com/wp-content/uploads/2022/10/noticias-maquinaria-MICHELIN-X-MULTI-HD-Z_-el-neumatico-de-camion.jpg"
        },
        {
        _id: "63a5ad297b207a66b9aff4b7",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "KEE967asdasdasda",
        brand: "VOLSKWAGEN",
        model: "BORA BORABO",
        supplier: "AUTOTAGGGG",
        expiration: 0,
        advance_notice: 40,
        life_cycle: 1000,
        position: "disponible",
        imagen: ""
        },
        {
        _id: "63a5ad3e7b207a66b9aff4b8",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "KEE967asdasdasda",
        brand: "VOLSKWAGEN",
        model: "BORABORABO",
        supplier: "AUTOTAGGGGG",
        expiration: 1735257600,
        advance_notice: 40,
        life_cycle: 1000,
        position: "disponible",
        imagen: "https://imgs.search.brave.com/4Pnx9JimZ2TAa26ebYiV1KbvvSEGPZN5tDAv14u1nrc/rs:fit:446:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/OGRoMlNRbmdEQ3U4/eWh5WFNYLTlBSGFI/MyZwaWQ9QXBp"
        },
        {
        _id: "63ac748c8f2d28cd570d7251",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "0123456789012345",
        brand: "PIRELLI1234",
        model: "REDOND ALMEDIO",
        supplier: "yo@gmail.com",
        expiration: 1685836800,
        advance_notice: 10,
        life_cycle: 10,
        position: "disponible",
        imagen: "https://imgs.search.brave.com/tUzW-z-QVVOROHwctAWzk2z5eVvrNuHgMLRKCL5BHRg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/Uk1RcWcyTEkyMS1n/MkFnd3dseFlBSGFI/YSZwaWQ9QXBp"
        },
        {
        _id: "63a5aa787b207a66b9aff4b6aa",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "ABS3512367HDS124121",
        brand: "ANDAPALLAA",
        model: "BOBOBO BOBO",
        supplier: "MESSIRVEEE",
        expiration: 1703203200,
        advance_notice: 40,
        life_cycle: 10000,
        position: "disponible",
        imagen: "https://www.noticiasmaquinaria.com/wp-content/uploads/2022/10/noticias-maquinaria-MICHELIN-X-MULTI-HD-Z_-el-neumatico-de-camion.jpg"
        },
        {
        _id: "63a5ad297b207a66b9aff4b7bb",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "KEE967asdasdasda",
        brand: "VOLSKWAGEN",
        model: "BORA BORABO",
        supplier: "AUTOTAGGGG",
        expiration: 0,
        advance_notice: 40,
        life_cycle: 1000,
        position: "disponible",
        imagen: ""
        },
        {
        _id: "63a5ad3e7b207a66b9aff4b8cc",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "KEE967asdasdasda",
        brand: "VOLSKWAGEN",
        model: "BORABORABO",
        supplier: "AUTOTAGGGGG",
        expiration: 1735257600,
        advance_notice: 40,
        life_cycle: 1000,
        position: "disponible",
        imagen: "https://imgs.search.brave.com/4Pnx9JimZ2TAa26ebYiV1KbvvSEGPZN5tDAv14u1nrc/rs:fit:446:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/OGRoMlNRbmdEQ3U4/eWh5WFNYLTlBSGFI/MyZwaWQ9QXBp"
        },
        {
        _id: "63ac748c8f2d28cd570d7251dd",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "0123456789012345",
        brand: "PIRELLI1234",
        model: "REDOND ALMEDIO",
        supplier: "yo@gmail.com",
        expiration: 1685836800,
        advance_notice: 10,
        life_cycle: 10,
        position: "disponible",
        imagen: "https://imgs.search.brave.com/tUzW-z-QVVOROHwctAWzk2z5eVvrNuHgMLRKCL5BHRg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/Uk1RcWcyTEkyMS1n/MkFnd3dseFlBSGFI/YSZwaWQ9QXBp"
        },
        {
        _id: "63a5aa787b207a66b9aff4b6ee",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "ABS3512367HDS124121",
        brand: "ANDAPALLAA",
        model: "BOBOBO BOBO",
        supplier: "MESSIRVEEE",
        expiration: 1703203200,
        advance_notice: 40,
        life_cycle: 10000,
        position: "disponible",
        imagen: "https://www.noticiasmaquinaria.com/wp-content/uploads/2022/10/noticias-maquinaria-MICHELIN-X-MULTI-HD-Z_-el-neumatico-de-camion.jpg"
        },
        {
        _id: "63a5ad297b207a66b9aff4b7ff",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "KEE967asdasdasda",
        brand: "VOLSKWAGEN",
        model: "BORA BORABO",
        supplier: "AUTOTAGGGG",
        expiration: 0,
        advance_notice: 40,
        life_cycle: 1000,
        position: "disponible",
        imagen: ""
        },
        {
        _id: "63a5ad3e7b207a66b9aff4b8gg",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "KEE967asdasdasda",
        brand: "VOLSKWAGEN",
        model: "BORABORABO",
        supplier: "AUTOTAGGGGG",
        expiration: 1735257600,
        advance_notice: 40,
        life_cycle: 1000,
        position: "disponible",
        imagen: "https://imgs.search.brave.com/4Pnx9JimZ2TAa26ebYiV1KbvvSEGPZN5tDAv14u1nrc/rs:fit:446:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/OGRoMlNRbmdEQ3U4/eWh5WFNYLTlBSGFI/MyZwaWQ9QXBp"
        },
        {
        _id: "63ac748c8f2d28cd570d7251hh",
        account: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        company: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        serial_number: "0123456789012345",
        brand: "PIRELLI1234",
        model: "REDOND ALMEDIO",
        supplier: "yo@gmail.com",
        expiration: 1685836800,
        advance_notice: 10,
        life_cycle: 10,
        position: "disponible",
        imagen: "https://imgs.search.brave.com/tUzW-z-QVVOROHwctAWzk2z5eVvrNuHgMLRKCL5BHRg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/Uk1RcWcyTEkyMS1n/MkFnd3dseFlBSGFI/YSZwaWQ9QXBp"
        },
    ])
    const [show, setShow] = useState(false)
    const [posiciones, setPosiciones] = useState({
        "simple":["DD","DI","TD","TI","AX"],
        "dual":["DD","DI","TD","TI","TED","TEI","AX"],
        "dobleDual":["DD","DI","TD","TI","TED","TEI","TD1","TI1","TED1","TEI1","AX"],
        "acoplado":["DD","DI","DED","DEI","TD","TI","TED","TEI","TD1","TI1","TED1","TEI1","AX"],
        "clark":["DD","DI","T"],
    })

    const handleChangeType = (type_interno) => {
        var hay_modificaciones = false
        tires.forEach((tire)=>{
            if (tire.position != "disponible"){
                hay_modificaciones = true
                return
            }
        })
        if (hay_modificaciones) {
            setTypeP(type_interno)
            const origen = posiciones[type]
            const destino = posiciones[type_interno]
            const diff = origen.filter((item) => !destino.includes(item))
            if (diff.length > 0) {
                setShow(true)               
            } else {
                changeVehicle_interna(type_interno)
            }
        } else {
            setType(type_interno)
        }
    }

    const returnItemsForColumn = (columnName) => {
        // console.log('columnName-----',columnName)
        return tires
            .filter((item) => item.position === columnName)
            .map((item, index) => (
                <Tire
                    key={item._id}
                    tire={item}
                    tires={tires}
                    setItems={setTires} 
                    index={index}
                />
            ))
    }

    const changeVehicle_interna = (type_nuevo) => {
        console.log(type, typeP, type_nuevo)
        const origen = posiciones[type]
        const destino = posiciones[type_nuevo]
        const diff = origen.filter((item) => !destino.includes(item))

        var tires_aux = tires
        tires_aux.forEach((tire)=>{
            if (diff.includes(tire.position)) {
                tire.position = "disponible"
            }
        })
        setTires(tires_aux)
        setType(type_nuevo)
        setShow(false)
    }

    const changeVehicle = () => {
        console.log(type, typeP)
        const origen = posiciones[type]
        const destino = posiciones[typeP]
        const diff = origen.filter((item) => !destino.includes(item))

        var tires_aux = tires
        tires_aux.forEach((tire)=>{
            if (diff.includes(tire.position)) {
                tire.position = "disponible"
            }
        })
        setTires(tires_aux)
        setType(typeP)
        setShow(false)
    }

    const handleSave = () => {
        alert('GUARDADO CORRECTAMENTE')
    }

    const handleAtras = () => {

    }

    return (

        <>
            <ConfirmModal  
                title='Cambio de Vehículo'
                show={show} 
                setShow={setShow} 
                onConfirm={ changeVehicle } 
                btnConfirmLabel='Cambiar'
            >   
                <strong>Los Nuemáticos volveran a Disponibles.<br></br> Desea cambiar de Vehículo ?</strong>
            </ConfirmModal>

            <div className='h-10 mx-8 mt-3 flex justify-between'>
                <nav className="flex mb-1 mt-0" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-6">
                        <li>
                        <div>
                            <button 
                                onClick={() => handleAtras()} 
                                className="text-gray-500 hover:text-gray-800"
                            >
                            <ChevronLeftIcon className="h-10 w-10 flex-shrink-0" aria-hidden="true" />
                            </button>
                        </div>
                        </li>
                    </ol>
                </nav>

                <button 
                    type='button'
                    className='btn-save'
                    onClick={handleSave}
                >
                    GUARDAR
                </button>
            </div>

            <div className='flex flex-row my-5'>
                
                <DndProvider backend={HTML5Backend}>
                    <Position title='disponible' className='col-ext'>
                        {returnItemsForColumn('disponible')}
                    </Position>
                    
                    { type === "simple" && 
                        <EjeSimple returnItemsForColumn={returnItemsForColumn}/>
                    }
                    { type === "dual" && 
                        <EjeDual returnItemsForColumn={returnItemsForColumn}/>
                    }
                    { type === "dobleDual" && 
                        <DobleDual returnItemsForColumn={returnItemsForColumn}/>
                    }
                    {/* { type === "acoplado" && 
                        <Acoplado returnItemsForColumn={returnItemsForColumn}/>
                    } */}
                    { type === "clark" && 
                        <Clark returnItemsForColumn={returnItemsForColumn}/>
                    }

                    <div className='flex-col basis-1/6 mt-14 items-center space-y-4'>
                        <button
                            type='button'
                            className='btn'
                            onClick={ () => handleChangeType("simple") }
                            ><BtnEjeSimple  />
                        </button>

                        <button
                            type='button'
                            className='btn'
                            onClick={ () => handleChangeType("dual") }
                            ><BtnEjeDual  />
                        </button>

                        <button
                            type='button'
                            className='btn'
                            onClick={ () => handleChangeType("dobleDual") }
                            ><BtnDobleDual />
                        </button>

                        {/* <button
                            type='button'
                            className='btn'
                            onClick={ () => handleChangeType("acoplado") }
                            ><div><BtnAcoplado /></div>
                        </button> */}

                        <button
                            type='button'
                            className='btn'
                            onClick={ () => handleChangeType("clark") }
                            ><BtnClark />
                        </button>
                    </div>

                </DndProvider>
            </div>
        </>
    );
}

export default TirePosition;
