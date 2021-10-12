import React from 'react'
import '../styles/Navbar.css'

function Navbar() {

    const btnCA = () => {
        console.log("hola");
    }

    return (
        <header className="header__container">
            <div className="header__logo">
                <p>Logo</p>
            </div>
            <nav className="header__menu">
                <ul className="header__menu--nav">
                    <li className="header__menu--nav-item"><a href="#">Inicio</a></li>
                    <li className="header__menu--nav-item"><a href="#">Proyectos</a></li>
                    <li className="header__menu--nav-item"><a href="#" onClick={btnCA}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export { Navbar }
