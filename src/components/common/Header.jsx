import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="nav1">
                <div><Link to="/" className='link text-white bg-dark appointment-btn scrollto'>Inicio</Link></div>
                <div><Link to="/RegisterGoal" className='link text-white bg-dark appointment-btn scrollto'>Registro de Usuario</Link></div>
                <div><Link to="/Income" className='link text-white bg-dark appointment-btn scrollto'>Ingresos</Link></div>
                <div><Link to="/Expenses" className='link text-white bg-dark appointment-btn scrollto'>Gastos</Link></div>
                <div><Link to="/Categories" className='link text-white bg-dark appointment-btn scrollto'>Categorías</Link></div>
            </div>
            <div className="nav3">
                <div className="nav2 text-white bg-dark">¿Quienes somos?</div>
                <img id="img" src="https://png.pngtree.com/png-vector/20240430/ourlarge/pngtree-a-pug-wearing-sunglasses-and-bandana-with-on-it-png-image_12310778.png" alt=""/>
          </div>
        </nav>
    </>
  )
}
