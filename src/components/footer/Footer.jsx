import { Link, NavLink } from "react-router-dom";
import 'styles/footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-[#872075] text-base-300 rounded">
      <div className="grid grid-flow-col gap-4">
        <NavLink
          to='/'
          className="link"
        >
          INICIO
        </NavLink>
        <NavLink
          to='nosotros/organizacion/'
          className="link"
        >
          NOSOTROS
        </NavLink>
        <NavLink
          to='procesos/todos/'
          className="link"
        >
          PROCESOS
        </NavLink>
        <NavLink
          to='/contacto'
          className="link"
        >
          CONTACTO
        </NavLink>
      </div>
      <div>
        <div className="grid grid-flow-col gap-8">
          <Link to='https://www.instagram.com/fundacion_tcp/' target='_blank' rel="noreferrer">
            <i className="fa-brands fa-instagram" />
          </Link>
          <Link to='https://www.facebook.com/transformando.con.pazionn' target='_blank' rel="noreferrer">
            <i className="fa-brands fa-facebook-f" />
          </Link>
          <Link to='https://twitter.com/FundacionTCP' target='_blank' rel="noreferrer">
            <i className="fa-brands fa-twitter" />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by fundacion transformando con Pazión</p>
      </div>
    </footer>
  )
}

export default Footer