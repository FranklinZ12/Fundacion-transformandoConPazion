import { Link, NavLink } from "react-router-dom";
import 'styles/footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-[#872075] text-base-300 rounded">
      <div className="grid grid-flow-col gap-4">
        <NavLink
          to='/'
          className={({ isActive }) => `link link-hover text-[#000000]` + (isActive ? ' text-[#000000] active' : '')}         

        >
          INICIO
        </NavLink>
        <NavLink
          to='nosotros/organizacion/'
          className={({ isActive }) => `link link-hover` + (isActive ? ' text-[#872075] bg-transparent active' : '')}

        >
          NOSOTROS
        </NavLink>
        <NavLink
          to='procesos/todos/'
          className={({ isActive }) => `link link-hover` + (isActive ? ' text-[#872075] bg-transparent active' : '')}

        >
          PROCESOS
        </NavLink>
        <NavLink
          to='/contacto'
          className={({ isActive }) => `link link-hover` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
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