
import './Navbar.css';
import CartIcon from "../User/CartIcon";
import { HiUser } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import LogoButton from "./LogoButton";

const Navbar = () => {
    const navigate = useNavigate();
    
    const handleNav = () => {
        navigate(`/login`);
      };

      

    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li className="logo-container">
                    
                        <div >
                            <LogoButton />
                        </div>
                </li>
                <li><button onClick={handleNav}>
                    <div>
                        <HiUser />
                    </div>
                    </button></li>
                <li><CartIcon /></li>

            </ul>
        </nav>
    );
};

export default Navbar;