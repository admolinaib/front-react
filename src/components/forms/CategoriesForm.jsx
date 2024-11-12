import React from 'react'

export default function CategoriesForm() {
  return (
    <>
        <div class="d-flex justify-content-center align-items-center min-vh-100">
            <form class="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Registra tu Categoría</h2>
                <div class="mb-3 w-75 p-3 d-flex align-items-center input-group position-relative">
                    <i class="bx bx-category"></i>
                    <input type="text" class="form-control shadow-sm ms-2" id="category" placeholder="Nombre de categoria:" required/>
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seleccionar</button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                </div>                 
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-notepad"></i>
                    <input type="text" class="form-control shadow-sm ms-2" id="descripcion" placeholder="Descripción:" required/>
                </div>
                <div class="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i class="bx bx-image"></i>
                    <input type="file" class="form-control shadow-sm ms-2" id="full-name" placeholder="Foto:"/>
                </div>   
                <button type="submit" class="btn btn-primary mb-3">Enviar</button>
            </form>
        </div>
    </>
  )
}
