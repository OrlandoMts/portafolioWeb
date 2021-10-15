import React from 'react';
import '../styles/Certifications.css'

function Certifications() {
    return (
        <section className="section__container--certications">
            <h2>Certificaciones</h2>
            <section className="table__container">
                <section className="section__table--certications">
                    <div className="table--column">
                        <h4>Fecha</h4>
                        <p>Jul 2021</p>
                    </div>
                    <div className="table--column">
                        <h4>Titulo</h4>
                        <p>Scrum Foundation Porfessional Certificate</p>
                    </div>
                    <div className="table--column">
                        <h4>Expedido por</h4>
                        <p>CertiProf</p>
                    </div>
                </section>
                <section className="section__table--certications">
                    <div className="table--column">
                        <p>Sept 2020</p>
                    </div>
                    <div className="table--column">
                        <p>Habilidades y Competencias Clave para el Mundo Profesional</p>
                    </div>
                    <div className="table--column">
                        <p>Santander</p>
                    </div>
                </section>
            </section>
        </section>
    )
}

export { Certifications }
