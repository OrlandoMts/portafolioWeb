import React from 'react'
import { PortafolioContext } from './PortafolioContext'

function Form() {

    const {openModal, setOpenModal} = React.useContext(PortafolioContext);

    const onCancel = () => {
        setOpenModal(false)
    }

    return (
        <section>
            <form action="">
            <label htmlFor="">Escribe tu nueva tarea</label>
            <textarea 
            // value={newToDoValue}
            // onChange={onChange}
            name="" id="" cols="30" rows="10" 
            placeholder="Salir a caminar con Oliver"></textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel" >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    // onClick={onSubmit}
                    className="TodoForm-button TodoForm-button-add" >
                    Añadir
                </button>
            </div>
        </form>   
        </section>
    )
}

export { Form }
