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
        <header className={`  flex  ${menuOpen? 'h-full flex-col items-end' : 'flex-row'} justify-between w-full ${darkMode? 'bg-white':'bg-darkThird'} pr-3 md:px-5 md:py-3 fixed top-0 left-0 z-10 ${darkMode? 'border-b':''} rounded-b-sm border-solid border-opacity-75 md:items-center`} >
            <a href="https://www.linkedin.com/in/luissanchezz3/" className={` ${menuOpen? 'hidden' : ''} w-32 h-9`}><img src={logo}  className={` ${menuOpen? 'hidden' : ''} ${darkMode? 'text-lightText':'text-darkText'} ${darkMode? '':'invert-colors'} w-32 h-9`} /></a>
            <button className={` w-10 h-10 md:hidden`}  onClick={handleMenu}
            ><img src={menuOpen? close : menu} alt="menu" className={`w-9 h-9 ${darkMode? '':'invert-colors'}`}/></button>
            <nav className={`${menuOpen? 'flex  w-full h-full p-0 m-0' : 'hidden'} md:flex`}
            >
                <ul className={`flex flex-col ${menuOpen? 'w-full gap-4' : ''}  md:flex-row md:gap-4 md:items-center`}>
                    <li>
                        <NavLink to="/" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.home}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About#main" className={`${darkMode? 'text-lightText':'text-darkText'}`} onClick={() => {
    if (document.getElementById('main')) {
        window.scrollTo({
            top: document.getElementById('main').offsetTop,
            left: 0,
        });
    }
}}
                        >{currentLanguage.header.about}</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/Portfolio" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.portfolio}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.blog}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.contact}</NavLink>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/18wiUSsQHfWPmb2Ba24ylWVNkTu2uVvTIgD-eTbi7zLw/edit?usp=sharing" className={`${darkMode? 'text-lightText':'text-darkText'} border py-2 px-3 rounded ${darkMode? 'border-lightSecond':'border-darkSecond'} projects-transition hover:bg-red-700`}>{currentLanguage.header.resume}</a>
                    </li>
                    <li>
                        <button onClick={handleClick} className={`${darkMode? 'text-lightText':'text-darkText'}`}>
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