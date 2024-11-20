import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export default function RegisterGoalForm({onLogin}) {

    let {register, handleSubmit, watch, formState:{errors}} = useForm();
    let contra = watch("password")
    let navigate = useNavigate()
    let onsubmited = async(data)=>{
        console.log("Datos del formulario");
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost:8000/usuario", {
                nombres: data.nombres,
                email: data.email,
                password: data.password,
                fechaNacimiento: data.fechaNacimiento,
                ubicacion: data.ubicacion,
                metaAhorro: data.metaAhorro
            })
            alert(respuesta.data.nombres+" has sido registrado exitosamente 👍")
            //onLogin()
            //navigate("/Home") //DEBEMOS CAMBIAR EL LINK A LA PAGINA INICIAL
            console.log("Respuesta del servidor");
            console.log(respuesta);
        } catch (error) {
            console.log(error);
            
        }
    }


  return (
    <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form onSubmit={ handleSubmit(onsubmited) } className="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Registro de Usuario</h2>
                <div className="mb-1 w-75 p-2 d-flex align-items-center position-relative">
                    <i className="bx bx-user-circle"></i>
                    <input type="text" {...register("nombres", {required: true})} className="form-control shadow-sm ms-2" id="full-name" placeholder="Nombre completo:"/> 
                </div>      
                {errors.nombres && <p className='text-danger'>El Nombrees obligatorio</p>}
                <div className="mb-1 w-75 p-2 d-flex align-items-center position-relative">
                    <i className="bx bx-envelope"></i>
                    <input type="email" {...register("email", {required: true})} className="form-control shadow-sm ms-2" id="email" placeholder="Correo electrónico:" />
                </div>
                {errors.email && <p className='text-danger'>El Correo es obligatorio</p>}
                <div className="mb-1 w-75 p-2 d-flex align-items-center position-relative">
                    <i className="bx bx-check-shield"></i>
                    <input type="password" {...register("password", {required: true})} className="form-control shadow-sm ms-2" id="password" placeholder="Contraseña:"/> 
                </div>
                {errors.password && <p className='text-danger'>La Contraseña es obligatoria</p>}
                <div className="mb-1 w-75 p-2  d-flex align-items-center position-relative">
                    <i className="bx bx-check-shield"></i>
                    <input type="password" {...register("passwordAgain", {required: "Repite tu contraseña", validate: (value)=> value == contra || "Las contraseñas no coinciden"})} className="form-control shadow-sm ms-2" id="passwordAgain" placeholder="Repetir contraseña:" />
                </div>
                {errors.passwordAgain && <p className='text-danger'>{errors.passwordAgain.message}</p>}
                <span> {errors.savingGoal && "El monto es obligatorio"} </span>
                <div className="mb-1 w-75 p-2 d-flex align-items-center position-relative">
                    <i className="bx bx-calendar"></i>
                    <input type="date" {...register("fechaNacimiento", {required: true})} className="form-control shadow-sm ms-2" id="date" placeholder="Fecha de nacimiento:" />
                </div>
                {errors.fechaNacimiento && <p className='text-danger'>La Fecha de nacimiento es obligatoria</p>}
                <div className="mb-1 w-75 p-2 d-flex align-items-center position-relative">
                    <i className="bx bx-current-location"></i>
                    <input type="text" {...register("ubicacion", {required: true})} className="form-control shadow-sm ms-2" id="location" placeholder="Ubicación:" />
                </div>
                {errors.ubicacion && <p className='text-danger'>La Ubicación es obligatoria</p>}
                <div className="mb-1 w-75 p-2 d-flex align-items-center position-relative">
                    <i className="bx bx-money"></i>
                    <input type="number" {...register("metaAhorro", {required: true})} className="form-control shadow-sm ms-2" id="savingGoal" placeholder="Ingresa tu meta a Ahorrar:" />
                </div>
                {errors.metaAhorro && <p className='text-danger'>Debes ingresar tu Meta de ahorro</p>}
                <button type="submit" className="btn btn-primary mb-1" id="register-btn">Registrarme</button>    
            </form>
        </div>
    </>
  )
}
