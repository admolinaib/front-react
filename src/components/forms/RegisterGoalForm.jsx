import React from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterGoalForm() {

    let {register, handleSubmit, formState:{errors}} = useForm();

    console.log(errors)
    let sendDataForm = handleSubmit((data) => {
        console.log(data)
    });


  return (
    <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form onSubmit={ sendDataForm } className="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Registra tu Meta</h2>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-user-circle"></i>
                    <input type="text" {...register("username", {required: true})} className="form-control shadow-sm ms-2" id="full-name" placeholder="Nombre completo:"/> 
                </div>      
                <span> {errors.username && "El campo es obligatorio"} </span>              
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-calendar"></i>
                    <input type="date" {...register("birthday")} className="form-control shadow-sm ms-2" id="date" placeholder="Fecha de Nacimiento:" required/>
                </div>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-map"></i>
                    <input type="text" {...register("location", {required: true})} className="form-control shadow-sm ms-2" id="location" placeholder="Ubicación:"/> 
                </div>
                <span> {errors.location && "La ubicación es obligatorio"} </span>
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-wallet"></i>
                    <input type="number" {...register("savingGoal", {required: true})} className="form-control shadow-sm ms-2" id="saving-goal" placeholder="Meta de ahorro:" />
                </div>
                <span> {errors.savingGoal && "El monto es obligatorio"} </span>
                <button type="submit" className="btn btn-primary mb-3" id="register-btn">Enviar</button>    
            </form>
        </div>
    </>
  )
}
