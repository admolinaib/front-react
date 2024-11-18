import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';



export default function ExpensesForm() {
    let {register, handleSubmit, formState : {errors}} = useForm()
    let onsubmited = async(data)=>{
        console.log("Datos del formulario");
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost:8000/gastos", data)
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
                <h2>Registra tus Gastos</h2>
                
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-notepad"></i>
                    <input type="text" {...register("descripcion", {required: true})} className="form-control shadow-sm ms-2" id="descripcion" placeholder="Descripción" required/>
                    {errors.descripcion && <p>Ingresa una descripción.</p>}
                </div>
                <div className="input-group mb-3 d-flex w-50 ">
                    <i className="bx bx-category"></i>
                    <input type="text" {...register("categoria", {required: true})} className="form-control rounded " value={inputValue} onChange={(e)=> setInputValue(e.target.value)} aria-label="Text input with dropdown button" placeholder="Categoría"/>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Elige Categoría</button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button onClick={()=> handleSelect("Transporte")} className="dropdown-item" >Transporte</button></li>
                        <li><button onClick={()=> handleSelect("Alimentación")} className="dropdown-item" >Alimentación</button></li>
                        <li><button onClick={()=> handleSelect("Moda")} className="dropdown-item" >Moda</button></li>
                        <li><button onClick={()=> handleSelect("Salud y bienestar")} className="dropdown-item" >Salud y bienestar</button></li>
                        <li><button onClick={()=> handleSelect("Hogar")} className="dropdown-item" >Hogar</button></li>
                    </ul>
                </div>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-bar-chart-alt-2"></i>
                    <input type="number" {...register("valor", {required: true})} className="form-control shadow-sm ms-2" id="valor" placeholder="Valor" required/>
                    {errors.valor && <p>Digita un valor valido.</p>}
                </div>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-calendar"></i>
                    <input type="date" {...register("fecha", {required: true})} className="form-control shadow-sm ms-2" id="fecha" placeholder="Fecha de registro de ingreso" required/>
                    {errors.fecha && <p>Ingresa una fecha valida.</p>}
                </div>
                <button type="submit" className="btn btn-primary mb-3">Registrar</button>
            </form>
        </div>
    </>
  )
}
