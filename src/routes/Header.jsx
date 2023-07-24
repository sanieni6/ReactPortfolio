import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../redux/slices/modeSlice';
import { toggleLanguage } from '../redux/slices/languagesSlice';

const Header = () => {
    const { darkMode } = useSelector((store) => store.mode);
    const { language, currentLanguage } = useSelector((store) => store.languages);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleMode());
    };

    const handleLanguage = () => {
        dispatch(toggleLanguage());
    };
    
    console.log('Mode:', darkMode); 
    return (
        <header className='flex flex-row justify-between w-full'>
            <h1 className={`${darkMode? 'text-lightMain':'text-darkMain'}`}>Luis Sanchez</h1>
            <nav className='flex'>
                <ul className='flex flex-row gap-4'>
                    <li>
                        <NavLink to="/">{currentLanguage.header.home}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio" className={`${darkMode? 'text-lightMain':'text-darkMain'}`}>Portfolio</NavLink>
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
                    <li>
                        <button onClick={handleClick} className={`${darkMode? 'text-lightMain':'text-darkMain'}`}>
                            {darkMode? 'dark' : 'light'}
                        </button>
                    </li>
                    <li>
                        <button onClick={handleLanguage}>
                            {language === 'en' ? 'es' : 'en'}
                        </button>
                    </li>
                </ul>

            </nav>
        </header>
    );
    }

export default Header;