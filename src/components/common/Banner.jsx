import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <>
        <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/fotos-premium/perro-pug-corbata-roja-sienta-frente-computadora-portatil_893474-2247.jpg" className="d-block w-100" alt="Imagen 3"/>    
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Bienvenido a Nuestra Plataforma</h1>
                        <p>La mejor experiencia para gestionar tus Finanzas</p>
                        <Link to="/Expenses" className='btn btn-primary btn-lg appointment-btn scrollto'>Ingresa tus gastos dando click acá!</Link>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/fotos-premium/pug-frustrado-que-trabaja-ilustracion-generativa-ai-oficina_110488-2311.jpg" className="d-block w-100" alt="Imagen 2"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Optimiza tu Productividad</h1>
                        <p>Organiza y completa tareas eficientemente</p>
                        <Link to="/Income" className='btn btn-primary btn-lg appointment-btn scrollto'>Digita tus ingresos dando click acá!</Link>
                    </div>
                </div>
            </div>
        
            <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    </>
  )
}
