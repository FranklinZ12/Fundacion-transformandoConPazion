import { NavLink, Outlet} from "react-router-dom";

const LinkList = ({url, title, icon}) => {
  return (
      <li>
          <NavLink to={url}
              className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
          >
              {title}
              <i className={icon} />
              <Outlet />
          </NavLink>
      </li>
  )
}

export default LinkList