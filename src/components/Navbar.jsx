import React from 'react';
import '../styles/Navbar.css';
import { PortafolioContext } from './PortafolioContext';
import airplane from '../assets/icons/fighter-jet-solid.svg';

function Navbar() {

    const {openModal, setOpenModal} = React.useContext(PortafolioContext);

    const btnCA = () => {
        setOpenModal(!openModal);
    }

    return (
        <header className="header__container">
            <div className="header__logo">
                <img src={airplane} alt="logo jet" />
            </div>
            <nav className="header__menu">
                <ul className="header__menu--nav">
                    <li className="header__menu--nav-item"><a href="#home">Inicio</a></li>
                    <li className="header__menu--nav-item"><a href="#proyectos">Proyectos</a></li>
                    <li className="header__menu--nav-item"><a href="#home" onClick={btnCA}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export { Navbar }
