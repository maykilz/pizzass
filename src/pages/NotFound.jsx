import React from 'react'
import { NavLink } from 'react-router-dom';
 
 
 const NotFound =() =>  { 
  return (
    <>
    <h1 className='notfoundhead'>Страница не найдена:(😕</h1>
    <NavLink to="/" className="button button--black notboundbutton">Вернуться назад</NavLink>
    </>
  )
}


export default NotFound; 