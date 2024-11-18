import React from 'react'

export default function IncomeForm() {
  return (
    <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form className="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Registra tus Ingresos</h2>
                                
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-bar-chart-alt-2"></i>
                    <input type="number" className="form-control shadow-sm ms-2" id="valor" placeholder="Valor" required/>
                </div>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-notepad"></i>
                    <input type="text" className="form-control shadow-sm ms-2" id="descripcion" placeholder="Descripción" required/>
                </div>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-calendar"></i>
                    <input type="date" className="form-control shadow-sm ms-2" id="fecha" placeholder="Fecha de registro de ingreso" required/>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Enviar</button>
            </form>
        </div>    
    </>
  )
}
