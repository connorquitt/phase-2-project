import './App.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/media' className='navbar'>Media</NavLink>
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