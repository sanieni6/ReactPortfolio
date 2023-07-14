import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Luis Sanchez</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    );
    }

export default Header;