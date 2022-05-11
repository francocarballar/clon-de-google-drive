import React, { useState } from 'react'
import './header.css'
import menuIcon from '../../assets/icons/menu_icon.svg'
import searchIcon from '../../assets/icons/search_icon.svg'
import viewIcon from '../../assets/icons/view_icon.svg'
import threePointsIcon from '../../assets/icons/three-points_icon.svg'

function Header ({ state, setState }) {
  return (
    <>
      <header className='header'>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <div className='header__container--menu'>
              <li>
                <img
                  src={menuIcon}
                  alt='icon menu'
                  id='header__menu--icon'
                  onClick={(e) => { setState(!state) }}
                />
              </li>
              <li>Mi unidad</li>
            </div>
            <div>
              <li>
                <img src={searchIcon} alt='' />
              </li>
              <li>
                <img src={viewIcon} alt='' />
              </li>
              <li>
                <img src={threePointsIcon} alt='' />
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  )
}

export { Header }
