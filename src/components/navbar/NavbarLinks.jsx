import { NavLink} from "react-router-dom";

const LinkList = ({url, title, text}) => {
  return (
      <li>
          <NavLink to={url}
              className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
          >
              {title}
              {text}
          </NavLink>
      </li>
  )
}

export default LinkList