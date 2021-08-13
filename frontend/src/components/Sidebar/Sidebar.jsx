import "./Sidebar.css";
import Logo from "../../assets/spologo.png"
import {HiOutlineHome} from "react-icons/hi"
import {BsSearch} from "react-icons/bs"
import {ImBooks} from "react-icons/im"
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar__wrap">
      <div className="top-part">
          <Link to={"/"}>
          <img src={Logo} className='logo' />
          </Link>
          <div className='menu__single selected__menu'>
             <HiOutlineHome className='menu__item'/> Home
          </div>
          <div className='menu__single'>
              <BsSearch className='menu__item'/> Search
          </div>
          <div className='menu__single'>
              <ImBooks className='menu__item'/> Books
          </div>
      </div>
      <div className="bottom-part">
          <button className='signup__btn btn'>Sign up</button>
          <button className='login__btn btn'>Login</button>
      </div>
    </div>
  );
};

export default Sidebar;
