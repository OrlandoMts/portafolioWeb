import React from 'react';
import '../styles/Presentation.css'

function Presentation() {

    const btnCa = () => {
        console.log("abrir el modal del formulario")
    }
    return (
        <section className="section__container">
            <div className="section__container--information">
                <h2>¡Hola!</h2>
                <h1>soy Orlando Montes</h1>
                <p>
                    Ingeniero en sistemas y entusiasta de la tecnologia e inovacion.
                    Una gran motivación por seguir perfeccionando mis habilidades, crecer profesionalmente y nunca parar de aprender; son aspectos que determinan mi ruta profesional
                </p>
                <div className="div__container--btn">
                    <button onClick={btnCa}>Contactame</button>
                </div>
            </div>
            <div className="section__container--picture" hidden>
                <h3>Mi foto...</h3>
            </div>
        </section>
    )
}

export { Presentation }