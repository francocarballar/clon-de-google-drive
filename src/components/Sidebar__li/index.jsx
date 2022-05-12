import React from 'react'
import './Sidebar__li.css'

function SidebarLi (props) {
  return (
    <li className='sidebar__li'>
      <img src={props.imgSrc} alt={props.imgDescription} className='sidebar__img--icons' />
      {props.text}
    </li>
  )
}

export { SidebarLi }
