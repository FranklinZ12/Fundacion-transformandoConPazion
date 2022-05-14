import { Link} from "react-router-dom";
import 'styles/footer/footer.css';
import ListLinks from "./ListLinks";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-[#872075] text-base-300 rounded">
      <ListLinks />
      <div>
        <div className="grid grid-flow-col gap-8">
          <Link to='https://www.instagram.com/fundacion_tcp/' target='_blank' rel="noreferrer">
            <i className="fa-brands fa-instagram" />
          </Link>
          <Link to='https://www.facebook.com/transformando.con.pazionn' target='_blank' rel="noreferrer">
            <i className="fa-brands fa-facebook-f" />
          </Link>
          <Link to='https://twitter.com/FundacionTCP' target='_blank' rel="noreferrer">
            <i className="fa-brands fa-twitter" />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by fundacion transformando con Pazión</p>
      </div>
    </footer>
  )
}

export default Footer