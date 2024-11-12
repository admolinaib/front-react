import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import RegisterGoal from "./pages/RegisterGoal"
import Income from "./pages/Income"
import Expenses from "./pages/Expenses"
import Categories from "./pages/Categories"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Register" element={ <Register /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/RegisterGoal" element={ <RegisterGoal /> } />
        <Route path="/Income" element={ <Income /> } />
        <Route path="/Expenses" element={ <Expenses /> } />
        <Route path="/Categories" element={ <Categories /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
