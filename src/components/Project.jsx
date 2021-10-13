import React from 'react';
import '../styles/Project.css';

function Project(props) {
    return (
        <div className="div__container--projectsList">
            <li className="li__projectsList--img"><p>{props.img}</p></li>
            <li className="li__projectsList--title"><p>{props.title}</p></li>
            <li className="li__projectsList--desc"><p>{props.desc}</p></li>
            <div className="projectsList__links">
                <li className="li__link"><a href={props.link} target="_blank">Sitio</a></li>
                <li className="li__link"><a href={props.link} target="_blank">Repositorio</a></li>
            </div>
        </div>
    )
}

export {Project}
