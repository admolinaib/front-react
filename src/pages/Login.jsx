import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import TestComponent from '../components/forms/TestComponent'

export default function Login({onLogin}) {
  return (
    <>
        <Header />
        <LoginForm onLogin={onLogin} />
        <Footer />      
    </>
  )
}
