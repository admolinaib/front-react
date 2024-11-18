import React from 'react'

export default function CategoriesForm() {
  return (
    <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form className="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Registra tu Categoría</h2>
                <div className="mb-3 w-75 p-3 d-flex align-items-center input-group position-relative">
                    <i className="bx bx-category"></i>
                    <input type="text" className="form-control shadow-sm ms-2" id="category" placeholder="Nombre de categoria:" required/>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seleccionar</button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                </div>                 
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-notepad"></i>
                    <input type="text" className="form-control shadow-sm ms-2" id="descripcion" placeholder="Descripción:" required/>
                </div>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-image"></i>
                    <input type="file" className="form-control shadow-sm ms-2" id="full-name" placeholder="Foto:"/>
                </div>   
                <button type="submit" className="btn btn-primary mb-3">Enviar</button>
            </form>
        </div>
    </>
  )
}
