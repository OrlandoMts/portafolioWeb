import React from 'react';
import '../styles/Project.css';

function Project(props) {
    return (
        <div className="div__container--projectsList">
            <li className="li__projectsList--img"><img src={props.img} alt="todoApp" id="ss_project"/></li>
            <li className="li__projectsList--title"><p>{props.title}</p></li>
            <li className="li__projectsList--desc"><p>{props.desc}</p></li>
            <div className="projectsList__links">
                <li className="li__link"><a href={props.sitio} target="_blank" rel="noreferrer">Sitio</a></li>
                <li className="li__link"><a href={props.repo} target="_blank" rel="noreferrer">Ver codigo</a></li>
            </div>
        </div>
    )
}

export {Project}
