import { Link, NavLink } from "react-router-dom";
import logo from 'assets/TCP.webp';
import LinkList from "./NavbarLinks";
import { useState, useRef, useEffect } from "react";

const NavbarResponsive = () => {
    const [open, setOpen] = useState(false);
    // const wrapperRef = useRef(null);

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
    //             setOpen(false);
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    // }, [])
    // ref = { wrapperRef }
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100">
                {/* <!-- Sidebar content here --> */}
                <div tabIndex="0" className="collapse collapse-plus bg-base-100">
                    <div className="collapse-title text-xl font-medium ">
                        <NavLink to='/nosotros/organizacion/'
                            className={({ isActive }) => `justify-between` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                        >
                            NOSOTROS
                            {/* <i className="fa-solid fa-angle-right w-6 h-6 text-base" /> */}
                        </NavLink>
                    </div>
                    <div tabIndex="0" className="collapse-content border border-base-300 rounded-box">
                        <ul className="p-1">
                            <a tabIndex="0" href="https://google.com" className="flex items-center p-2">a</a>
                            <LinkList url='nosotros/organizacion/' title='Nuestra Organizacion' />
                            <LinkList url='nosotros/equipo/' title='Nuestro equipo' />
                            <LinkList url='nosotros/voluntario-y-donacion/' title='Voluntario y donacion' />
                        </ul>
                    </div>
                </div>
                <LinkList url='/' title='INICIO' />
                {/* <li tabIndex="0">
                    <NavLink to='/nosotros/organizacion/'
                        className={({ isActive }) => `justify-between` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                    >
                        NOSOTROS
                        <i className="fa-solid fa-angle-right w-6 h-6 text-base" />
                    </NavLink>
                    <ul className="p-1">
                        <LinkList url='nosotros/organizacion/' title='Nuestra Organizacion' />
                        <LinkList url='nosotros/equipo/' title='Nuestro equipo' />
                        <LinkList url='nosotros/voluntario-y-donacion/' title='Voluntario y donacion' />
                    </ul>
                </li> */}
                <li tabIndex="0">
                    <NavLink to='procesos/todos/'
                        className={({ isActive }) => `justify-between` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
                    >
                        PROCESOS
                        <i className="fa-solid fa-angle-right w-6 h-6 text-base" />
                    </NavLink>
                    <ul className="p-1">
                        <LinkList url='/procesos/todos/' title='Nuestros Procesos' />
                        <LinkList url='procesos/medellin-barrista/' title='Medellin Barrista' />
                        <LinkList url='procesos/club-deportivo-tcp/' title='Club deportivo TCP' />
                        <LinkList url='procesos/es&su/' title='ES&SU' />
                        <LinkList url='procesos/jovemp/' title='Jovemp' />
                        <LinkList url='procesos/liga-guayabal/' title='Liga Guayabal' />
                        <LinkList url='procesos/torneo-barrial/' title='Torneo Barrial' />
                        <LinkList url='procesos/a.g.a/' title='A.G.A' />
                        <LinkList url='procesos/nataural-woman/' title='Natural Woman' />
                        <LinkList url='procesos/cronicas-y-pasion-deportiva/' title='Cronicas y pasion deportiva' />
                    </ul>
                </li>
                <LinkList url='contacto/' title='CONTACTO' />
            </ul>
        </div>
        // <div className="navbar-start justify-between">
        //     <div className="dropdown" >
        //         <label
        //             tabIndex="0" className="btn btn-ghost lg:hidden"
        //             onClick={() => setOpen(!open)}
        //         >
        //             {
        //                 open ? (
        //                     <i className="fa-solid fa-xmark w-7 h-7 text-2xl" />
        //                 ) : (
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        //                     </svg>
        //                 )
        //             }
        //         </label>
        //         {open &&
        //             <ul tabIndex="0" className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-48">
        //                 <LinkList url='/' title='INICIO' />
        //                 <li tabIndex="0">
        //                     <NavLink to='/nosotros/organizacion/'
        //                         className={({ isActive }) => `justify-between` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
        //                     >
        //                         NOSOTROS
        //                         <i className="fa-solid fa-angle-right w-6 h-6 text-base" />
        //                     </NavLink>
        //                     <ul className="p-1">
        //                         <LinkList url='nosotros/organizacion/' title='Nuestra Organizacion' />
        //                         <LinkList url='nosotros/equipo/' title='Nuestro equipo' />
        //                         <LinkList url='nosotros/voluntario-y-donacion/' title='Voluntario y donacion' />
        //                     </ul>
        //                 </li>
        //                 <li tabIndex="0">
        //                     <NavLink to='procesos/todos/'
        //                         className={({ isActive }) => `justify-between` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
        //                     >
        //                         PROCESOS
        //                         <i className="fa-solid fa-angle-right w-6 h-6 text-base" />
        //                     </NavLink>
        //                     <ul className="p-1">
        //                         <LinkList url='/procesos/todos/' title='Nuestros Procesos' />
        //                         <LinkList url='procesos/medellin-barrista/' title='Medellin Barrista' />
        //                         <LinkList url='procesos/club-deportivo-tcp/' title='Club deportivo TCP' />
        //                         <LinkList url='procesos/es&su/' title='ES&SU' />
        //                         <LinkList url='procesos/jovemp/' title='Jovemp' />
        //                         <LinkList url='procesos/liga-guayabal/' title='Liga Guayabal' />
        //                         <LinkList url='procesos/torneo-barrial/' title='Torneo Barrial' />
        //                         <LinkList url='procesos/a.g.a/' title='A.G.A' />
        //                         <LinkList url='procesos/nataural-woman/' title='Natural Woman' />
        //                         <LinkList url='procesos/cronicas-y-pasion-deportiva/' title='Cronicas y pasion deportiva' />
        //                     </ul>
        //                 </li>
        //                 <LinkList url='contacto/' title='CONTACTO' />
        //             </ul>
        //         }
        //     </div>
        // </div>
    )
}

export default NavbarResponsive