import React from 'react';
import './File.css';
import docs from '../../assets/icons/File/docs.png';
import important from '../../assets/icons/Folder/important_icon.svg';
import docEjemplo from '../../assets/img/File/doc_ejemplo.png';

function File (props) {
    return (
        <div className="file-container">
            <div>
                <img src={docEjemplo} alt="Documento de ejemplo" className="file__img--docs" />
            </div>
            <div className="file">
            <img src={docs} alt="Icono de un documento de texto" className="file__icon--docs" />
            {props.text}
            <img src={important} alt="Icono de exclamación que representa algo impirtante" className="file__icon--important" />
            </div>
        </div>
    );
}

export {File};