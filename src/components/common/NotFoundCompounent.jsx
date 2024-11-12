import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundCompounent() {
  return (
    <>
        <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/fotos-premium/perro-pug-corbata-roja-sienta-frente-computadora-portatil_893474-2247.jpg" className="d-block w-100" alt="Imagen 3"/>    
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Página no encontrada</h1>
                        <p>💀💀💀</p>
                        <Link to="/RegisterGoal" className='btn btn-primary btn-lg appointment-btn scrollto'>Click para ir a registrar meta</Link>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/fotos-premium/pug-frustrado-que-trabaja-ilustracion-generativa-ai-oficina_110488-2311.jpg" className="d-block w-100" alt="Imagen 2"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Optimiza tu Productividad</h1>
                        <p>Organiza y completa tareas eficientemente</p>
                        <a href="registro.html" className="btn btn-success btn-lg">Empieza Gratis</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-none d-md-block">
                        <img src="https://img.freepik.com/fotos-premium/perro-pug-anteojos-par-anteojos-sienta-escritorio-computadora-portatil_147933-6117.jpg" className="d-block w-100" alt="Imagen 1"/>
                        <h1>Colabora con tu Equipo</h1>
                        <p>Herramientas avanzadas para trabajo en equipo</p>
                        <a href="registro.html" className="btn btn-warning btn-lg">Descubre Más</a>
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
