import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between bg-amber-50 items-center ">
      <div className="w-28">
        <img src={logo} alt="Eatry" />
      </div>
      <div>
        <ul className="flex justify-evenly w-3xs align-middle">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to ="/contact">Contact us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
