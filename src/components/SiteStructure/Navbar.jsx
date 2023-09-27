import './Navbar.css';
import CartIcon from "../User/CartIcon";
import { HiUser } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import LogoButton from "./LogoButton";
import { useAuth } from '../User/AuthContext';

const Navbar = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    
    const handleNav = () => {
        if (currentUser) { 
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };
      
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li className="logo-container">
                    <div >
                        <LogoButton />
                    </div>
                </li>
                {currentUser && (
                    <li className="username-display">
                        Welcome, {currentUser.username}
                    </li>
                )}
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