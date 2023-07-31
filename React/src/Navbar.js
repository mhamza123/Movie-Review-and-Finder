import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/home">Home</Link>
            </div>
            <div className="userinfo">
                <Link to="/user">User</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;