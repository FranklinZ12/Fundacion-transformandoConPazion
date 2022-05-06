import { Link, NavLink } from 'react-router-dom';
import 'styles/navbar/navbar.css';
import NavbarResponsive from './NavbarResponsive';
import logo from 'assets/TCP.webp';
import LinkList from "./NavbarLinks";

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
                            <LinkList url='nosotros/organizacion/' title='NOSOTROS'
                                icon='fa-solid fa-angle-down'
                            />
                            <ul className="card card-compact p-2 bg-white shadow-md">
                                <div className='w-[650px] grid grid-cols-2 gap-3'>
                                    <li>
                                        <NavLink to='/nosotros/organizacion/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Nuestra Organizacion</h3>
                                                <p>Conozca nuestra escencia y un poco <br /> de nuestra historia.</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='nosotros/equipo/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Nuestro equipo</h3>
                                                <p>Conozca nuestro equipo de trabajo<br /> todos entregados a la fundacion.</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='nosotros/voluntario-y-donacion/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Voluntario y donacion</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <NavLink to='/procesos/todos/'
                                className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                            >
                                PROCESOS
                                <i className="fa-solid fa-angle-down" />
                            </NavLink>
                            <ul className="p-1 card card-compact bg-white shadow-md">
                                <div className='w-[650px] grid grid-cols-2 gap-3'>
                                    <li>
                                        <NavLink to='/procesos/todos/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Nuestros procesos</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/medellin-barrista/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Medellin Barrista</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/club-deportivo-tcp/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Club deportivo TCP</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/es&su/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">ES&SU</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/jovemp'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Jovemp</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/liga-guayabal/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Liga Guayabal</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/torneo-barrial/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Torneo Barrial</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/a-g-a/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">A.G.A</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/nataural-woman/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Natural Woman</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='procesos/cronicas-y-pasion-deportiva/'
                                            className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                                        >
                                            <div className="card-body">
                                                <h3 className="card-title">Cronicas y pasion deportiva</h3>
                                            </div>
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='/contacto'
                                className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                            >
                                CONTACTO
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to='auth/login' className="btn btn-outline btn-secondary">MI CUENTA</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar