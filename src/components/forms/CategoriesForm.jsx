import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function CategoriesForm() {
    let {register, handleSubmit, formState : {errors}} = useForm()
    let onsubmited = async(data)=>{
        console.log("Datos del formulario");
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost:8000/categorias", data)
            console.log("Respuesta del servidor");
            console.log(respuesta);
        } catch (error) {
            console.log(error);
            
        }
    }
    const [inputValue, setInputValue] = useState("")
    const handleSelect = (text) => {
    setInputValue(text)
    }
  return (
    <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form onSubmit={handleSubmit(onsubmited)} className="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Registra tu Categoría</h2>
                <div className="mb-3 w-75 p-3 d-flex align-items-center input-group position-relative">
                    <i className="bx bx-category"></i>
                    <input type="text" {...register("nombreCategoria", {required: true})} className="form-control shadow-sm ms-2" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} id="category" placeholder="Nombre de categoria:" required/>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seleccionar</button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button onClick={()=> handleSelect("Transporte")} className="dropdown-item" >Transporte</button></li>
                            <li><button onClick={()=> handleSelect("Alimentación")} className="dropdown-item" >Alimentación</button></li>
                            <li><button onClick={()=> handleSelect("Moda")} className="dropdown-item" >Moda</button></li>
                            <li><button onClick={()=> handleSelect("Salud y bienestar")} className="dropdown-item" >Salud y bienestar</button></li>
                            <li><button onClick={()=> handleSelect("Hogar")} className="dropdown-item" >Hogar</button></li>
                        </ul>
                </div>                 
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-notepad"></i>
                    <input type="text" {...register("descripcion", {required: true})} className="form-control shadow-sm ms-2" id="descripcion" placeholder="Descripción:" required/>
                </div>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-image"></i>
                    <input type="file" {...register("fotoCategoria", {required: true})} className="form-control shadow-sm ms-2" id="full-name" placeholder="Foto:"/>

                </div>   
                <button type="submit" className="btn btn-primary mb-3">Enviar</button>
            </form>
        </div>
    </>
  )
}
