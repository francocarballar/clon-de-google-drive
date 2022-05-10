import React from "react";
import './sidebar.css';
import profilePicture from '../../assets/img/account.png';

function Sidebar({state}) {;
    return (
        <React.Fragment>
            {state && 
            <div className="sidebar">
                <ul className="sidebar__ul">
                    <div className="sidebar__container-account">
                        <li>
                            <img src={profilePicture} alt="Foto de perfil" id="sidebar__img--profile-picture"/>
                        </li>
                        <li id="sidebar__li--email">francocarballar@gmail.com</li>
                    </div>
                    <div>
                        <li>
                            <img/>
                            Mi unidad
                        </li>
                        <li>
                            <img/>
                            Compartidos conmigo
                        </li>
                        <li>
                            <img/>
                            Recientes
                        </li>
                        <li>
                            <img/>
                            Destacados
                        </li>
                    </div>
                </ul>
            </div>
            }
        </React.Fragment>
    );
}

export {Sidebar};