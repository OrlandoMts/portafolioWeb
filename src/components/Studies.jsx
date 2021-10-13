import React from 'react';
import '../styles/Studies.css';

function Studies() {
    return (
        <section className="section__container--studies">
            <div className="div__title">
                <h2>Formación académica</h2>
            </div>
            <div className="div__card--info">
                <div className="div__card--info-title">
                    <p className="div__card--info-isc">Ing Sistemas Computacionales</p>
                    <p className="div__card--info-profesional">Profesional</p>
                </div>
                <div className="div__card--info-description">
                    <p className="div__card--info-date">(2016-2021)</p>
                    <p className="div__card--info-tec">Instituto Tecnológico de Ciudad Madero</p>
                    <p className="div__card--info-slogan">Formar profesionistas altamente competitivos en las tecnologías de la computación a través de procesos educativos de calidad</p>
                    <p>Icono de medalla</p>
                </div>
            </div>
        </section>
    )
}

export { Studies }
