import React from 'react'

export default function ExpensesForm() {
  return (
    <>
        <div class="d-flex justify-content-center align-items-center min-vh-100">
            <form class="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Registra tus Gastos</h2>
                
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-notepad"></i>
                    <input type="text" class="form-control shadow-sm ms-2" id="descripcion" placeholder="Descripción" required/>
                </div>
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-category"></i>
                    <input type="number" class="form-control shadow-sm ms-2" id="valor" placeholder="Categoría" required/>
                </div>
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-bar-chart-alt-2"></i>
                    <input type="number" class="form-control shadow-sm ms-2" id="valor" placeholder="Valor" required/>
                </div>
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-calendar"></i>
                    <input type="date" class="form-control shadow-sm ms-2" id="fecha" placeholder="Fecha de registro de ingreso" required/>
                </div>
                <button type="submit" class="btn btn-primary mb-3">Emnviar</button>
            </form>
        </div>
    </>
  )
}
