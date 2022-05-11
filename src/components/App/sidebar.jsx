import React from 'react'
import './sidebar.css'
import profilePicture from '../../assets/img/account.png'
import arrow from '../../assets/icons/arrow_icon.svg'
import myUnit from '../../assets/icons/my-unit_icon.svg'
import people from '../../assets/icons/people.svg'
import clock from '../../assets/icons/clock.svg'
import star from '../../assets/icons/star.svg'
import googleDrive from '../../assets/icons/google-drive_logo.svg'

function Sidebar ({ state }) {
  ;
  return (
    <>
      {state &&
        <div className='sidebar'>
          <ul className='sidebar__ul'>
            <div className='sidebar__container-account'>
              <li>
                <img src={profilePicture} alt='Foto de perfil' id='sidebar__img--profile-picture' />
              </li>
              <li id='sidebar__li--email'>
                francocarballar@gmail.com
                <img src={arrow} alt='Icono de una flecha' className='sidebar__img--icons' />
              </li>
            </div>
            <div>
              <li>
                <img src={myUnit} alt='Icono de mi unidad' className='sidebar__img--icons' />
                Mi unidad
              </li>
              <li>
                <img src={people} alt='Icono de personas que simboliza la acción de compartir' className='sidebar__img--icons' />
                Compartidos conmigo
              </li>
              <li>
                <img src={clock} alt='Icono de un reloj que simboliza los archivos recientes' className='sidebar__img--icons' />
                Recientes
              </li>
              <li>
                <img src={star} alt='Icono de un estrella que simboliza los archivos destacados' className='sidebar__img--icons' />
                Destacados
              </li>
            </div>
            <div className='sidebar__container-links'>
              <li>
                <a href='https://support.google.com/drive/'>Ayuda</a>
              </li>
              <li>
                <a href='#'>Enviar comentarios</a>
              </li>
              <li>
                <a href='https://policies.google.com/privacy'>Política de Privacidad</a>
              </li>
              <li>
                <a href='https://support.google.com/drive/answer/2450387'>Condiciones del Servicio</a>
              </li>
              <li>
                <a href='https://drive.google.com/drive/u/0?fd=true'>Versión para computadoras de escritorio</a>
              </li>
            </div>
            <li id='sidebar__li--storage'>
              <a href='https://www.google.com/settings/u/0/storage'>3&nbsp;% de 15&nbsp;GB utilizado</a>
            </li>
            <div className='sidebar__conatiner-google-drive-download'>
              <li>
                <img src={googleDrive} alt='Logotipo de la aplicación Google Drive' className='sidebar__img--icons' />
                Obtén la app de Google Drive
              </li>
            </div>
          </ul>
        </div>}
    </>
  )
}

export { Sidebar }
