import './App.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink to='/movies' className='navbar'>Movies</NavLink>
            <NavLink to='/'>Home</NavLink>
        </nav>
    )
}

function NavMoreInfo() {
    return (
        <nav className='navbar'>
            <NavLink to='/movies/:id'>More Info</NavLink>
        </nav>
    )
}

export default NavBar;