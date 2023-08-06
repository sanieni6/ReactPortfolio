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
            document.body.style.backgroundColor = darkMode? '#fff':'#000';
    }, [darkMode]);


    
    return (
        <header className={`flex flex-row justify-between w-full ${darkMode? 'bg-white':'bg-darkThird'} p-5 fixed top-0 left-0 z-10 border-b rounded-b-sm border-solid border-opacity-75`} >
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
                        <NavLink to="/Blog" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.blog}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.header.contact}</NavLink>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/18wiUSsQHfWPmb2Ba24ylWVNkTu2uVvTIgD-eTbi7zLw/edit?usp=sharing" className={`${darkMode? 'text-lightText':'text-darkText'} border py-2 px-3 rounded ${darkMode? 'border-lightSecond':'border-darkSecond'}`}>{currentLanguage.header.resume}</a>
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