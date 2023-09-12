import { Link } from "react-router-dom";
import '../../App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to='/'>WulfCo Shop</Link>
            </div>
            <ul className="navbar__links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>

            </ul>
        </nav>
    );
};

export default Navbar;