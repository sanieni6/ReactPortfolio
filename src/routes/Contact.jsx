import { useSelector } from "react-redux";
import greeting from "../images/greeting.svg";
import facebook from '../images/icons8-facebook.svg';
import github from '../images/icons8-github.svg';
import linkedin from '../images/icons8-linkedin.svg';
import medium from '../images/medium.svg';

const Contact = () => {

    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    const socialMedia = () => (
        <div className='flex gap-2'>
            <a href='https://www.facebook.com/' className= {`w-5 h-5`}><img src={facebook} className= {`${darkMode? 'invert-colors':'invert-colors'} w-5 h-5`} alt="facebook" /></a>
            <a href='https://github.com/sanieni6' className= {`w-5 h-5`}><img src={github} className= {`${darkMode? 'invert-colors':'invert-colors'} w-5 h-5`} alt="github" /></a>
            <a href='https://www.linkedin.com/in/luissanchezz3/' className= {`w-5 h-5`}><img src={linkedin} className= {`${darkMode? 'invert-colors':'invert-colors'} w-5 h-5`} alt="linkedin" /></a>
            <a href='https://medium.com/@luissanchezzamora23' className= {`w-5 h-5`}><img src={medium} className= {`${darkMode? 'invert-colors':'invert-colors'} w-5 h-5`} alt="medium" /></a>
        </div>
    );

    return (
        <div className="w-full flex flex-col justify-center items-center mheader">
            <div className="w-3/4 mt-7">
                <h3 className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.contact.secondTitle}</h3>
                <h2 className={`${darkMode? 'text-lightText':'text-darkText'} text-2xl`}>{currentLanguage.contact.mainTitle}</h2>
            </div>
            <div className="w-4/5 flex flex-col md:flex-row justify-center my-7 gap-3">
                <div className= {`${darkMode? 'bg-lightThird':'bg-darkThird'}  w-full md:w-2/5 border rounded p-4 flex flex-col gap-2 justify-center items-center ${darkMode? 'border-lightSecond':'border-darkSecond'}`}>
                    <img src={greeting} alt="greeting" className="w-11/12 h-max"/>
                    <div className="w-11/12">
                    <p className={`${darkMode? 'text-darkText':'text-darkText'} text-left text-2xl mt-3`}>{currentLanguage.contact.name}</p>
                    <p className={`${darkMode? 'text-darkText':'text-darkText'} text-left font-thin text-sm `}>{currentLanguage.contact.position}</p>
                    <p className={`${darkMode? 'text-darkText':'text-darkText'} text-left my-3`}> {currentLanguage.contact.paragraph}</p>
                    <p className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.contact.phone} : {currentLanguage.contact.number}</p>
                    <p className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.contact.email} : <a href={`mailto:${currentLanguage.contact.address}`}>Send Email</a></p>
                    </div>
                    <div className="mt-2 flex flex-col gap-1 w-11/12">
                        <p className={`${darkMode? 'text-darkText':'text-darkText'} text-left`}>{currentLanguage.contact.find}</p>
                        {socialMedia()}
                    </div>
                </div>
                <form action="https://formspree.io/f/mwkjplad" id="forma" method="post" className= {`${darkMode? 'border-lightSecond':'border-darkSecond'} w-full md:w-3/5 border rounded p-4 `}>
                <ul>
                    <li className="flex flex-col gap-1">
                        <label className={`${darkMode? 'text-lightText':'text-darkText'} text-left text-sm`}>{currentLanguage.contact.nameInput}</label>
                        <input type="text" id="username" maxLength="30" required className= {`${darkMode? 'bg-lightThird':'bg-darkThird'} rounded text-white`} />
                    </li>
                    <li className="flex flex-col gap-1">
                        <label className={`${darkMode? 'text-lightText':'text-darkText'} text-left text-sm`}>{currentLanguage.contact.phoneInput}</label>
                        <input type="text" id="number" maxLength="15" className= {`${darkMode? 'bg-lightThird':'bg-darkThird'} rounded text-white`} />
                    </li>
                    <li className="flex flex-col gap-1">
                        <label className={`${darkMode? 'text-lightText':'text-darkText'} text-left text-sm`}>{currentLanguage.contact.emailInput}</label>
                        <input type="email" id="email" required className= {`${darkMode? 'bg-lightThird':'bg-darkThird'} rounded text-white`}/>
                    </li>
                    <li className="flex flex-col gap-1">
                        <label className={`${darkMode? 'text-lightText':'text-darkText'} text-left text-sm`}>{currentLanguage.contact.subjectInput}</label>
                        <input type="text" maxLength="40" className= {`${darkMode? 'bg-lightThird':'bg-darkThird'} rounded text-white`}/>
                    </li>
                    <li className="flex flex-col gap-1">
                        <label className={`${darkMode? 'text-lightText':'text-darkText text-left text-sm'}`}>{currentLanguage.contact.messageInput}</label>
                        <textarea name="message" cols="30" rows="10" maxLength="500" placeholder="Enter text here" className= {`${darkMode? 'bg-lightThird':'bg-darkThird'} rounded text-white`}></textarea>
                    </li>
                    <button type="submit" className={`${darkMode? 'text-darkText':'text-darkText'} mt-2 p-3 rounded ${darkMode? 'bg-lightThird':'bg-darkThird'}`}>{currentLanguage.contact.sendBtn}</button>
                    </ul>
                </form>
            </div>
        </div>
    );
    }

export default Contact;