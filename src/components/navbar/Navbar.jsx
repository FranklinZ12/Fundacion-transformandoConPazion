import { Link, NavLink } from 'react-router-dom';
import 'styles/navbar/navbar.css';
import NavbarResponsive from './NavbarResponsive';
import logo from 'assets/TCP.webp';
import LinkList from "./NavbarLinks";
import CardLinks from './CardLinks';

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
                                <div className='w-[650px] grid grid-cols-2 gap-3'>
                                    <CardLinks url='nosotros/organizacion/' title='Nuestra Organizacion'
                                        parrafo='Conozca nuestra escencia y un poco de nuestra historia.'
                                    />
                                    <CardLinks url='nosotros/equipo/' title='Nuestro equipo'
                                        parrafo='Conozca nuestro equipo de trabajo todos entregados a la fundacion.'
                                    />
                                    <CardLinks url='nosotros/voluntario-y-donacion/'
                                        title='Voluntario y donacion'
                                    />
                                </div>
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
                                <div className='w-[650px] grid grid-cols-2 gap-3'>
                                    <CardLinks url='procesos/todos/' title='Nuestros procesos' />
                                    <CardLinks url='procesos/medellin-barrista/' title='Medellin Barrista' />
                                    <CardLinks url='procesos/club-deportivo-tcp/' title='Club Deportivo TCP' />
                                    <CardLinks url='procesos/es&su/' title='ES&SU' />
                                    <CardLinks url='procesos/jovemp' title='Jovemp' />
                                    <CardLinks url='procesos/liga-guayabal/' title='Liga Guayabal' />
                                    <CardLinks url='procesos/torneo-barrial/' title='Torneo Barrial' />
                                    <CardLinks url='procesos/a-g-a/' title='A.G.A' />
                                    <CardLinks url='procesos/nataural-woman/' title='Natural Woman' />
                                    <CardLinks url='procesos/cronicas-y-pasion-deportiva/' title='Cronicas y Pasion Deportiva' />
                                </div>
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