import { NavLink } from 'react-router-dom';

const LinksFooter = ({ruta, title}) => {
  return (
      <NavLink
          to={ruta}
          className="link"
      >
          {title}
      </NavLink>
  )
}

export default LinksFooter