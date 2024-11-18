import Rect from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer>
            <div className="footer-content">
                <p>GitHub Profiles:</p>
                <Link className="btn btn-primary mb-3" to="https://github.com/Dnlbta16">Daniel</Link>
                <Link className="btn btn-primary mb-3" to="https://github.com/admolinaib">Daniela</Link>
                <Link className="btn btn-primary mb-3" to="https://github.com/tu-perfil3">Pablo</Link>
                <Link className="btn btn-primary mb-3" to="https://github.com/Nicolas12-ux">Nicolas</Link>
                <Link className="btn btn-primary mb-3" to="https://github.com/vesteim">Yeison</Link>
            </div>
        </footer>
    </>
  )
}
