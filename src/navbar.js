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


export default NavBar;