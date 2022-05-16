import React from 'react';
import './Main.css';
import {Folder} from '../Folder/index';
import {File} from '../File/index';

function Main () {
    return (
        <React.Fragment>
            <main className='main'>
                <h2>Carpetas</h2>
                <div className='main__container-folders'>
                    <Folder 
                        text='Documentos'
                        backgroundColor='#5f6368'
                    /> 
                    <Folder 
                        text='Fotos'
                        backgroundColor='blue'
                    />
                    <Folder 
                        text='Videos'
                        backgroundColor='yellow'
                    />
                    <Folder 
                        text='Programación'
                        backgroundColor='green'
                    />
                </div>
                <h2>Archivos</h2>
                <div className='main__container-files'>
                    <File text='Cornell Notes'/>
                    <File text='Cornell Notes'/>
                    <File text='Cornell Notes'/>
                    <File text='Cornell Notes'/>
                    <File text='Cornell Notes'/>
                    <File text='Cornell Notes'/>
                </div>
            </main>
        </React.Fragment>
    );
}

export {Main};