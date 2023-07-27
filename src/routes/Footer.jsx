import { useSelector } from 'react-redux';
import facebook from '../images/icons8-facebook.svg';
import github from '../images/icons8-github.svg';
import linkedin from '../images/icons8-linkedin.svg';
import medium from '../images/medium.svg';

const Footer = () => {

    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    const socialMedia = () => (
        <div className='flex gap-2'>
            <img src={facebook} className= {`${darkMode? '':'invert-colors'} w-5 h-5`} alt="facebook"/>
            <img src={github} className= {`${darkMode? '':'invert-colors'} w-5 h-5`} alt="github"/>
            <img src={linkedin} className= {`${darkMode? '':'invert-colors'} w-5 h-5`} alt="linkedin"/>
            <img src={medium} className= {`${darkMode? '':'invert-colors'} w-5 h-5`} alt="medium"/>
        </div>
    );
    return (
        <footer className='w-full flex flex-col '>
            {/* personal info */}
            <div className='w-full flex flex-row justify-between items-center'>
                    <div>
                        <h3 className={`${darkMode? 'text-lightText':'text-darkText text-lg'}`}>Photo</h3>
                        <h3 className={`${darkMode? 'text-lightText':'text-darkText text-lg'}`}>Luis Sanchez </h3>
                    </div>
                    <h3 className={`${darkMode? 'text-lightText':'text-darkText text-lg'}`}>{currentLanguage.footer.designed}</h3>
                {socialMedia()}
                </div>
            <div className='w-full'>
                <p className={`${darkMode? 'text-lightText':'text-darkText text-lg'}`}>{currentLanguage.footer.rights}</p>
            </div>

        </footer>
    );
}

export default Footer;