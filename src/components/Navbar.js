import {ReactComponent as Logo} from "../assets/logo.svg";
import {Link} from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";
// import {ReactComponent as Profile} from "./profile-icon"

const Navbar = () => {
    return ( 
        <nav className={NavbarCSS.navbar}>
            {/* <div className="links"> */}
                <ul>
                    <li>
                        <Link exact to ="/">Home</Link>
                    </li>
                    <li>
                        <Link exact to ="/about">About</Link>
                    </li>
                    <li>
                        <Link exact to ="/history">My history</Link>
                    </li>
                    <li>
                        <Link exact to ="/contact">Contact</Link>
                    </li>
                </ul>
            <div>
                <Logo id={NavbarCSS.logo_pic} />
            </div>
            <div className={NavbarCSS.buttons} id={NavbarCSS.navbar_buttons}>
                {/* <Profile id="profile_pic" /> */}
                <button id={NavbarCSS.login}>Login</button>
                <button id={NavbarCSS.register}>Register</button>
            </div>
        </nav>
    );
}

export default Navbar;