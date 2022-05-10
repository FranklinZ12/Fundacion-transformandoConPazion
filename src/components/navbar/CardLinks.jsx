import { NavLink } from 'react-router-dom';

const CardLinks = ({ url, title, parrafo }) => {
  return (
    <li>
      <NavLink to={url}
        className={({ isActive }) => `` + (isActive ? ' text-[#872075] bg-transparent active' : '')}
      >
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          {
            parrafo &&
            <p className='whitespace-pre-wrap'>{parrafo}</p>
          }
        </div>
      </NavLink>
    </li>
  )
}

export default CardLinks