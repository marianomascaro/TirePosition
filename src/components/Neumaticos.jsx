import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../App.css';
import Dragdrop from './DragDrop';

const Neumaticos = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Dragdrop />
      </div>
    </DndProvider>
  )
}

export default Neumaticos