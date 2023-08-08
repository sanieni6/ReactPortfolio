import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch,} from 'react-redux';
import { toggleMode } from '../redux/slices/modeSlice';
import { toggleLanguage } from '../redux/slices/languagesSlice';
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";
import logo from "../images/cr2.svg";
import '../index.css';

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
            document.body.style.backgroundColor = darkMode? '#fff':'#000';
    }, [darkMode]);


    
    return (
        <header className={`flex flex-row justify-between w-full ${darkMode? 'bg-white':'bg-darkThird'} px-5 py-3 fixed top-0 left-0 z-10 ${darkMode? 'border-b':''} rounded-b-sm border-solid border-opacity-75 items-center`} >
            <img src={logo}  className={`${darkMode? 'text-lightText':'text-darkText'} ${darkMode? '':'invert-colors'} w-32 h-9`} />
            <nav className='flex'>
                <ul className='flex flex-row gap-4 items-center'>
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
                            <option value="en">
                                <img src="" alt="" />
                                English</option>
                            <option value="es">Español</option>
                        </select>
                    </li>
                </ul>

            </nav>
        </header>
    );
    }

export default Header;