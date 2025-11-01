import { NavLink } from "react-router-dom";
export const Navbar =() => {
    return(
        <>
        <header>
            <div className="nav-container">
                <div className="logo">
                    <NavLink to="/">Akash</NavLink>
                </div>
                <nav className>
                    <ul className="navlinks">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}