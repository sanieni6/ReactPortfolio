import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch,} from 'react-redux';
import { toggleMode } from '../redux/slices/modeSlice';
import { toggleLanguage } from '../redux/slices/languagesSlice';
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";
import logo from "../images/cr2.svg";
import menu from "../images/menu.svg";
import '../index.css';
import close from "../images/close.svg";

const Header = () => {
    const { darkMode } = useSelector((store) => store.mode);
    const { language, currentLanguage } = useSelector((store) => store.languages);
    const dispatch = useDispatch();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClick = () => {
        dispatch(toggleMode());
    };

    const handleLanguage = () => {
        dispatch(toggleLanguage());
    };

    useEffect(() => {
            document.body.style.backgroundColor = darkMode? '#fff':'#000';
    }, [darkMode]);


    
    return (
        <header className={`  flex  ${menuOpen? 'h-full flex-col items-end' : 'flex-row'} justify-between w-full ${darkMode? 'bg-white':'bg-darkThird'} pr-3 md:px-9 md:py-4 fixed top-0 left-0 z-10 ${darkMode? 'border-b':''} rounded-b-sm border-solid border-opacity-75 md:items-center`} >
            <a href="https://www.linkedin.com/in/luissanchezz3/" rel="noreferrer" target="_blank" className={` ${menuOpen? 'hidden' : ''} w-32 h-9`}><img src={logo}  className={` ${menuOpen? 'hidden' : ''} ${darkMode? 'text-lightText':'text-darkText'} ${darkMode? '':'invert-colors'} w-32 h-9`} /></a>
            <button className={` w-10 h-10 md:hidden`}  onClick={handleMenu}
            ><img src={menuOpen? close : menu} alt="menu" className={`w-9 h-9 ${darkMode? '':'invert-colors'}`}/></button>
            <nav className={`${menuOpen? 'flex  w-full h-full p-0 m-0' : 'hidden'} md:flex`}
            >
                <ul className={`flex flex-col ${menuOpen? 'w-full gap-4' : ''}  md:flex-row md:gap-4 md:items-center`}>
                    <li className={`py-2 px-3 hover:bg-darkSecond ${darkMode? 'hover:bg-lightSecond':'hover:bg-darkSecond'} projects-transition hover:rounded`}>
                        <NavLink to="/" className={`${darkMode? 'text-lightText':'text-darkText'}`} onClick={menuOpen? handleMenu : null}>{currentLanguage.header.home}</NavLink>
                    </li>
                    <li className={`py-2 px-3 hover:bg-darkSecond ${darkMode? 'hover:bg-lightSecond':'hover:bg-darkSecond'} projects-transition hover:rounded`}>
                        <NavLink to="/about#skills" className={`${darkMode? 'text-lightText':'text-darkText'}`} onClick={menuOpen? handleMenu : null}>{currentLanguage.header.about}</NavLink> 
                    </li>
                    <li className={`py-2 px-3 hover:bg-darkSecond ${darkMode? 'hover:bg-lightSecond':'hover:bg-darkSecond'} projects-transition hover:rounded`}>
                        <NavLink to="/portfolio" className={`${darkMode? 'text-lightText':'text-darkText'}`} onClick={menuOpen? handleMenu : null}>{currentLanguage.header.portfolio}</NavLink>
                    </li>
                    <li className={`py-2 px-3 hover:bg-darkSecond ${darkMode? 'hover:bg-lightSecond':'hover:bg-darkSecond'} projects-transition hover:rounded`}>
                        <NavLink to="/blog" className={`${darkMode? 'text-lightText':'text-darkText'}`} onClick={menuOpen? handleMenu : null}>{currentLanguage.header.blog}</NavLink>
                    </li>
                    <li className={`py-2 px-3 hover:bg-darkSecond ${darkMode? 'hover:bg-lightSecond':'hover:bg-darkSecond'} projects-transition hover:rounded`}>
                        <NavLink to="/contact" className={`${darkMode? 'text-lightText':'text-darkText'}`} onClick={menuOpen? handleMenu : null}>{currentLanguage.header.contact}</NavLink>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/18wiUSsQHfWPmb2Ba24ylWVNkTu2uVvTIgD-eTbi7zLw/edit?usp=sharing" rel="noreferrer" target="_blank" className={`${darkMode? 'text-lightText':'text-darkText'} border py-2 px-3 rounded ${darkMode? 'border-lightSecond':'border-darkSecond'} projects-transition ${darkMode? 'hover:bg-lightSecond':'hover:bg-darkSecond'} `} onClick={menuOpen? handleMenu : null}>{currentLanguage.header.resume}</a>
                    </li>
                    <li>
                        <button onClick={handleClick} className={`${darkMode? 'text-lightText':'text-darkText'} md:flex md:items-center`}>
                            <img src={darkMode? moon : sun} alt="dark mode" className={` ${darkMode? '':'invert-colors'} w-7 h-7 hover:shadow-2xl`}/>
                        </button>
                    </li>
                    <li className='h-min'>
                        <select name="" id=""
                        value={language}
                        onChange={handleLanguage}
                        className={`${darkMode ? 'text-lightText' : 'text-darkText'} ${darkMode ? 'bg-darkText' : 'bg-darkThird'}`}
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>
                    </li>
                </ul>

            </nav>
        </header>
    );
    }

export default Header;