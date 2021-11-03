import {ReactComponent as Logo} from "./logo.svg"
// import {ReactComponent as Profile} from "./profile-icon"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/" id="home">Home</a>
                <a href="/about">About</a>
                <a href="/history">My history</a>
                <a href="/contact">Contact</a>
            </div>
            <div>
                <Logo id="logo_pic" />
            </div>
            <div className="buttons" id="navbar_buttons">
                {/* <Profile id="profile_pic" /> */}
                <button id="login">Login</button>
                <button id="register">Register</button>
            </div>
            {/* <div className="logo">
                <img src="images/logo.svg" className="pic" id="logo" alt="logo"></img>
            </div> */}
        </nav>
    );
}

export default Navbar;