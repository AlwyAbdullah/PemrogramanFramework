import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Food Hunter</Link>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className='nav-link' to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/reservasi'>Reservasi</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
 
export default Header;