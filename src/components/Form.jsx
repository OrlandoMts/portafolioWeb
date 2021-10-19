import * as React from 'react';
import { PortafolioContext } from './PortafolioContext';
import '../styles/Form.css';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Form() {

    const {setOpenModal, name, setName, mail, setMail, message, setMessage} = React.useContext(PortafolioContext);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChangeName = (event) => {
        const { value } = event.target;
        setName(value);
    }

    const handleChangeMail = (event) => {
        const { value } = event.target;
        setMail(value);
    }

    const handleChangeMessage = (event) => {
        const { value } = event.target;
        setMessage(value);
    }
    
    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = ()=> {
        setTimeout(()=>{
            const buttonMail = document.querySelector('#meEmail');
            buttonMail.setAttribute('href', `mailto:dani_monts19@hotmail.com?subject=${name} ${mail}&body=${message}`);
            buttonMail.click();
        }, 500)
    }

    return (
        <section className="section__form" >
            <h3>Hagamos realidad tu idea</h3>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                    <Input className="section__form--input" placeholder="Nombre" value={name} onChange={handleChangeName} />   
                    <Input className="section__form--input" type="email" placeholder="Correo" value={mail} onChange={handleChangeMail}/>
                    <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Cuentame sobre tu idea"
                    value={message}
                    onChange={handleChangeMessage}
                    className="section__form--textarea"
                    />
                <div className="form__buttons">
                    <button 
                        type="button" 
                        onClick={onCancel} >
                        Cerrar
                    </button>
                    <button 
                        type="submit" 
                        onClick={onSubmit} >
                        Enviar
                    </button>
                </div> 
                <a href="mailto:dani@xd.com" id="meEmail" hidden>correo</a>  
            </Box>
        </section>
    )
}

export { Form }


// <form action="">
// <label htmlFor="">Escribe tu nueva tarea</label>
// <textarea 
// // value={newToDoValue}
// // onChange={onChange}
// name="" id="" cols="30" rows="10" 
// placeholder="Salir a caminar con Oliver"></textarea>
// <div className="TodoForm-buttonContainer">
//     <button 
//         type="button" 
//         onClick={onCancel}
//         className="TodoForm-button TodoForm-button-cancel" >
//         Cancelar
//     </button>
//     <button 
//         type="submit" 
//         // onClick={onSubmit}
//         className="TodoForm-button TodoForm-button-add" >
//         Añadir
//     </button>
// </div>
// </form>   
