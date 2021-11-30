import { NavLink } from "react-router-dom";

export const AppBar = () => (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid navbar-collapse collapse">
            <a href="/" className="navbar-brand">
                {`{Router Demo}`}
            </a>
        </div>
        <div className="navbar-nav nav navbar-right">
            <ul className="navbar-nav navbar-right me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/About" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);