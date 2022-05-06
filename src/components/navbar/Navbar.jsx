import { Link, NavLink } from 'react-router-dom';
import 'styles/navbar/navbar.css';
import NavbarResponsive from './NavbarResponsive';
import logo from 'assets/TCP.webp';
import LinkList from "./NavbarLinks";
import ListLinks from './ListLinks';
import ListCardLinks from './ListCardLinks';

const Navbar = () => {
    return (
        <header role="banner">
            <nav className="navbar bg-base-100 navbar-styles">
                <NavbarResponsive />
                <div className='navbar-start w-3/4 md:w-1/5 lg:hidden'>
                    <Link to="/" className="btn btn-link h-full">
                        <img src={logo} width="100" height="10" alt='logo-tcp' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink to='/'
                                className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                            >
                                INICIO
                            </NavLink>
                        </li>
                        <li tabIndex="0">
                            <NavLink to='nosotros/organizacion/'
                                className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                            >
                                NOSOTROS
                                <i className="fa-solid fa-angle-down" />
                            </NavLink>
                            <ul className="card card-compact p-2 bg-white shadow-md">
                                <ListCardLinks />
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <NavLink to='procesos/todos/'
                                className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                            >
                                PROCESOS
                                <i className="fa-solid fa-angle-down" />
                            </NavLink>
                            <ul className="p-1 card card-compact bg-white shadow-md">
                                <ListLinks />
                            </ul>
                        </li>
                        <LinkList url='/contacto' title='CONTACTO' />
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='auth/login' className="btn btn-outline btn-secondary">MI CUENTA</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar