import { Link, NavLink } from 'react-router-dom';
import 'styles/navbar/navbar.css';
import NavbarResponsive from './NavbarResponsive';
import LinkList from "./NavbarLinks";
import ListLinks from './ListLinks';
import ListCardLinks from './ListCardLinks';
import Logo from 'components/ui/Logo';
import DashBoardRoutes from 'routers/DashBoardRoutes';
import Footer from 'components/footer/Footer';

const Navbar = () => {
    return (
        <div role="banner">
            <nav className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <header className="w-full navbar justify-between bg-base-100 navbar-styles">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none lg:hidden">
                            <Link to="/" className="btn btn-link h-full">
                                <Logo />
                            </Link>
                        </div>
                        <div className="hidden flex-none lg:flex brand">
                            <Link to="/" className="btn btn-link h-full">
                                <Logo />
                            </Link>
                        </div>
                        <div className="flex-none navbar-center hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
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
                        <div className="mr-3">
                            <Link to='auth/login' className="btn btn-outline btn-secondary">MI CUENTA</Link>
                        </div>
                    </header>
                    {/* <!-- Page content here --> */}
                    <DashBoardRoutes />
                    <Footer />
                </div>
                <NavbarResponsive />
            </nav>
        </div>
    )
}

export default Navbar