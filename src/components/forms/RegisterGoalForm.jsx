import React from 'react'

export default function RegisterGoalForm() {
  return (
    <>
        <div class="d-flex justify-content-center align-items-center min-vh-100">
            <form class="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Registra tu Meta</h2>
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-user-circle"></i>
                    <input type="text" class="form-control shadow-sm ms-2" id="full-name" aria-describedby="emailHelp" placeholder="Nombre completo:"/>
                </div>                    
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-calendar"></i>
                    <input type="date" class="form-control shadow-sm ms-2" id="date" placeholder="Fecha de Nacimiento:" required/>
                </div>
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-map"></i>
                    <input type="text" class="form-control shadow-sm ms-2" id="location" placeholder="Ubicación:" required/>
                </div>
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-wallet"></i>
                    <input type="number" class="form-control shadow-sm ms-2" id="saving-goal" placeholder="Meta de ahorro:" required/>
                </div>
                <button type="submit" class="btn btn-primary mb-3" id="register-btn">Enviar</button>    
            </form>
        </div>
    </>
  )
}
