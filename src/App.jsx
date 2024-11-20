import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import RegisterGoal from "./pages/RegisterGoal"
import Income from "./pages/Income"
import Expenses from "./pages/Expenses"
import Categories from "./pages/Categories"
import NotFound from "./pages/NotFound"
import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"

function App() {

  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let handleLogin = () => {
    setIsAuthenticated(true);
  }

  return (
    <>
      <Routes>
        <Route path="/Register" element={ isAuthenticated ? <Navigate to="/Home" /> : <Register onLogin={handleLogin} /> } />
        <Route path="/Login" element={ isAuthenticated ? <Navigate to="/Home" /> : <Login onLogin={handleLogin} /> } />
        <Route path="/Home" element={ isAuthenticated ? <Home /> : <Navigate to="/Login" /> } />
        <Route path="/RegisterGoal" element={ isAuthenticated ? <RegisterGoal /> : <Navigate to="/Login" /> } />
        <Route path="/Income" element={ isAuthenticated ? <Income /> : <Navigate to="/Login" /> } />
        <Route path="/Expenses" element={ isAuthenticated ? <Expenses /> : <Navigate to="/Login" /> } />
        <Route path="/Categories" element={ isAuthenticated ? <Categories/> : <Navigate to="/Login" /> } />
        {/* <Route path="/*" element={ <NotFound /> } /> */}
        <Route path="*" element={ <Login onLogin={handleLogin} /> } />
      </Routes>
    </>
  )
}

export default App
