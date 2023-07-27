import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch,} from 'react-redux';
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

    useEffect(() => {
            document.body.style.backgroundColor = darkMode? '#dedede':'#000';
    }, [darkMode]);


    
    return (
        <header className={`flex flex-row justify-between w-full ${darkMode? 'bg-lightMain':'bg-darkMain'} p-5`} >
            <h1 className={`${darkMode? 'text-lightText':'text-darkText'}`}>&lt; Luis Sanchez /&gt;</h1>
            <nav className='flex'>
                <ul className='flex flex-row gap-4'>
                    <li>
                        <NavLink to="/" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.home}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.about}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.portfolio}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.services}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.blog}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.contact}</NavLink>
                    </li>
                    <li>
                        <button onClick={handleClick} className={`${darkMode? 'text-lightText':'text-darkText'}`}>
                            {darkMode? currentLanguage.header.dark : currentLanguage.header.light}
                        </button>
                    </li>
                    <li>
                        <button onClick={handleLanguage} className={`${darkMode? 'text-lightText':'text-darkText'}`}>
                            {language === 'en' ? 'es' : 'en'}
                        </button>
                    </li>
                </ul>

            </nav>
        </header>
    );
    }

export default Header;