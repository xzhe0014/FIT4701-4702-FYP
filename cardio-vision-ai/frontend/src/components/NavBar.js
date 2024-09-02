import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">CardioVisionAI</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/prediction">Prediction</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
