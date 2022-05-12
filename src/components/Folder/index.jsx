import React from 'react';
import './Folder.css';
import important from '../../assets/icons/Folder/important_icon.svg';

function Folder (props) {
    return (
        <React.Fragment>
            <div className="folder">
            <svg height="24px" width="24px" focusable="false" viewBox="0 0 24 24" fill={props.backgroundColor} className="folder__icon--folder">
                <g>
                    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </g>
            </svg>
            {props.text}
            <img src={important} alt="Icono de exclamación que representa algo impirtante" className="folder__icon--important" />
            </div>
        </React.Fragment>
    );
}

export {Folder};