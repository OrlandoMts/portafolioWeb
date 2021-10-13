import React from 'react'
import '../styles/ProjectsList.css'

function ProyectsList(props) {
    return (
        <section className="section__projectsList">
            <h2>Proyectos</h2>
            <ul className="ul__projectsList">
                {props.children}
            </ul>
        </section>
    )
}

export { ProyectsList }
