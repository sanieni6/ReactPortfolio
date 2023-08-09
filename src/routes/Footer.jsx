import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import facebook from '../images/icons8-facebook.svg';
import github from '../images/icons8-github.svg';
import linkedin from '../images/icons8-linkedin.svg';
import medium from '../images/medium.svg';

const Footer = () => {

    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    const socialLinks = () => (
        <div className='flex gap-3'>
            <a href='https://www.facebook.com/' className= {`w-5 h-5`}><img src={facebook} className= {`${darkMode? 'invert-colors':'invert-colors'} w-5 h-5`} alt="facebook" /></a>
            <a href='https://github.com/sanieni6' className= {`w-5 h-5`}><img src={github} className= {`${darkMode? 'invert-colors':'invert-colors'} w-5 h-5`} alt="github" /></a>
            <a href='https://www.linkedin.com/in/luissanchezz3/' className= {`w-5 h-5`}><img src={linkedin} className= {`${darkMode? 'invert-colors':'invert-colors'} w-5 h-5`} alt="linkedin" /></a>
            <a href='https://medium.com/@luissanchezzamora23' className= {`w-5 h-5`}><img src={medium} className= {`${darkMode? 'invert-colors':'invert-colors'} w-5 h-5`} alt="medium" /></a>
            </div>
    );

    const socialMedia = () => (
        <div className='w-1/4 flex flex-col items-start gap-3'>
            <h2 className={`${darkMode? 'text-darkText':'text-darkText'} text-2xl`}>{currentLanguage.footer.contactInfo}</h2>
            <div className='flex flex-col gap-2 items-start'>
                <p className={`${darkMode? 'text-darkText':'text-darkText'}`}>{currentLanguage.contact.number}</p>
                {/* <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.contact.address}</p> */}
                <p className={`${darkMode? 'text-darkText':'text-darkText'}`}>{currentLanguage.footer.site}</p>
            </div>
            {socialLinks()}
        </div>
    );
    return (
        <footer className={`flex flex-row justify-between w-full ${darkMode? 'bg-lightThird':'bg-darkThird'} w-full flex flex-col pt-7 pb-3`}>
            <div className='w-full hidden md:flex flex-row justify-between items-start pr-5 pl-28'>
                    <div className='w-1/4 flex flex-col items-start gap-3'>
                        <h2 className={`${darkMode? 'text-darkText':'text-darkText'} text-2xl`}>{currentLanguage.footer.portfolio}</h2>
                        <h3 className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.footer.description}</h3>
                        <h3 className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.footer.description2}</h3>
                    </div>
                    <div className='w-1/4 flex flex-col items-start'>
                        <h2 className={`${darkMode? 'text-darkText':'text-darkText'} text-2xl`}>{currentLanguage.footer.quickLinks}</h2>
                    <nav className='flex'>
                <ul className='flex flex-col gap-3 items-start'>
                    <li>
                        <NavLink to="/" className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.header.home}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.header.about}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio" className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.header.portfolio}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog" className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.header.blog}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.header.contact}</NavLink>
                    </li>
                    </ul>
            </nav>
            
            </div>
                {socialMedia()}
                </div>
                <hr className={`${darkMode? 'text-darkText':'text-darkText'} hidden md:flex w-3/4 self-center mt-3 mb-1`}/>
            <div className='w-full flex flex-col items-center'>
                <div className='flex md:hidden'>
                    {socialLinks()}
                </div>
                <p className={`${darkMode? 'text-darkText':'text-darkText text-lg'}`}>{currentLanguage.footer.rights}</p>
            </div>

        </footer>
    );
}

export default Footer;