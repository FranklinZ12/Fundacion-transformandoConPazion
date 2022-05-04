import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/TCP.webp';
import 'styles/navbar/navbar.css';

const Navbar = () => {
    return (
        <header role="banner">
            <nav className="navbar bg-base-100 navbar-styles">
                <div className="navbar-start justify-between">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/'
                                >
                                    INICIO
                                </NavLink>
                            </li>
                            <li tabIndex="0">
                                <NavLink to='/nosotros/' className="justify-between">
                                    NOSOTROS
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </NavLink>
                                <ul className="p-2">
                                    <li><NavLink to='/nosotros/'>Nuestra Organizacion</NavLink></li>
                                    <li><NavLink to='/nosotros/equipo'>Nuestro equipo</NavLink></li>
                                    <li><NavLink to=''>Voluntario y donacion</NavLink></li>
                                </ul>
                            </li>
                            <li tabIndex="0">
                                <NavLink to='/procesos/' className="justify-between">
                                    PROCESOS
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </NavLink>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to='/procesos/medellin-barrista/'>Medellin Barrista</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/procesos/club-deportivo-tcp/'>Club deportivo TCP</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/procesos/es&su/'>ES&SU</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/procesos/jovemp/'>Jovemp</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/procesos/liga-guayabal/'>Liga Guayabal</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/procesos/torneo-barrial/'>Torneo Barrial</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/procesos/a.g.a/'>A.G.A</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/procesos/nataural-woman/'>Natural Woman</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/procesos/cronicas-y-pasion-deportiva/'>Cronicas y pasion deportiva</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to='/contacto'>CONTACTO</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:flex brand'>
                        <Link to="/" className="btn btn-link h-full">
                            <img src={logo} width="100" height="10" alt='logo-tcp' />
                        </Link>
                    </div>
                </div>
                <div className='navbar-start w-3/4 md:w-1/5 lg:hidden'>
                    <Link to="/" className="btn btn-link h-full">
                        <img src={logo} width="100" height="10" alt='logo-tcp' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink to='/'
                                className={({ isActive }) => `` + (isActive ? ' text-purple-900 bg-transparent active' : '')}
                            >
                                INICIO
                            </NavLink>
                        </li>
                        <li tabIndex="0">
                            <NavLink to='nosotros/organizacion'
                                className={({ isActive }) => `` + (isActive ? ' text-purple-900 bg-transparent active' : '')}
                            >
                                NOSOTROS
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </NavLink>
                            <ul className="card card-compact p-2 bg-white shadow-md">
                                <div className='w-[650px] grid grid-cols-2 gap-3'>
                                    <li>
                                        <NavLink to='/nosotros/organizacion'>
                                            <div class="card-body">
                                                <h3 class="card-title">Nuestra Organizacion</h3>
                                                <p>you can use any element as a dropdown.</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='nosotros/equipo/'>
                                            <div class="card-body">
                                                <h3 class="card-title">Nuestro equipo</h3>
                                                <p>you can use any element as a dropdown.</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='nosotros/voluntario-y-donacion/'>
                                            <div class="card-body">
                                                <h3 class="card-title">Voluntario y donacion</h3>
                                                <p>you can use any element as a dropdown.</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <NavLink to='/procesos'
                                className={({ isActive }) => `` + (isActive ? ' text-purple-900 bg-transparent active' : '')}
                            >
                                PROCESOS
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </NavLink>
                            <ul className="p-2">
                                <li>
                                    <NavLink to=''>Medellin Barrista</NavLink>
                                </li>
                                <li>
                                    <NavLink to=''>Club deportivo TCP</NavLink>
                                </li>
                                <li>
                                    <NavLink to=''>ES&SU</NavLink>
                                </li>
                                <li>
                                    <NavLink to=''>Jovemp</NavLink>
                                </li>
                                <li>
                                    <NavLink to=''>Liga Guayabal</NavLink>
                                </li>
                                <li>
                                    <NavLink to=''>Torneo Barrial</NavLink>
                                </li>
                                <li>
                                    <NavLink to=''>A.G.A</NavLink>
                                </li>
                                <li>
                                    <NavLink to=''>Natural Woman</NavLink>
                                </li>
                                <li>
                                    <NavLink to=''>Cronicas y pasion deportiva</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='/contacto'
                                className={({ isActive }) => `` + (isActive ? ' text-purple-900 bg-transparent active' : '')}
                            >
                                CONTACTO
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to='' className="btn btn-outline btn-secondary">MI CUENTA</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar