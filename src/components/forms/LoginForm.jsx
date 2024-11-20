import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export default function LoginForm({onLogin}) {
  console.log('onLogin prop:', onLogin);
//toggle
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

//consumo api
  let {register, handleSubmit, formState: {errors} } = useForm();

  let navigate = useNavigate();

  let onSubmited = async (data) => {
    console.log("Datos del form")
    console.log(data);
    try {
      let respuesta = await axios.post("http://localhost:8000/login", data)
      alert("Bienvenido " + respuesta.data.nombres)

      onLogin();
      navigate("/Home")
      console.log("Respuesta")
      console.log(respuesta);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <form onSubmit={handleSubmit(onSubmited)} className="d-flex flex-column align-items-center w-50 p-3 rounded shadow-sm bg-purple-transparent">
                <h2>Inicia Sesión</h2>
                                
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                    <i className="bx bx-user-circle"></i>
                    <input type="email" {...register("email", {required: true})} className="form-control shadow-sm ms-2" id="valor" placeholder="Correo electrónico"/>
                </div>
                {errors.email && <p className='bg-primary-subtle rounded p-1'>El correo es obligatorio</p>}
                <div className="mb-3 w-75 p-3 d-flex align-items-center position-relative">
                  <i className={`bx ${showPassword ? 'bx bx-show' : 'bx bx-hide'}`} onClick={togglePassword}></i>
                  <input
                      type={showPassword ? 'text' : 'password'}
                      {...register("password", {required: true})}
                      className="form-control shadow-sm ms-2"
                      placeholder="Contraseña"
                  />
                </div>
                {errors.password && <p className='bg-primary-subtle rounded p-1'>La contraseña es obligatoria</p>} 
                <div><Link to="/Register" className='link text-white bg-dark appointment-btn scrollto'>¿Aún no tienes cuenta? Regístrate</Link></div>
                <button type="submit" className="btn btn-primary mb-3 mt-3">Enviar</button>
            </form>
        </div>    
    </>
  )
};
