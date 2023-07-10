import React from 'react'
import './home.scss'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <nav className='nav'>
        <NavLink className='nav__item' to='/'>Inicio</NavLink>
        <NavLink className='nav__item' to='/products'>Productos</NavLink>
        <NavLink className='nav__item' to='/users'>Usuarios</NavLink>
    </nav>
    <Outlet />
    <footer>Hola</footer>
    </>
  )
}

export default Home