import { useSelector } from 'react-redux';
import facebook from '../images/icons8-facebook.svg';
import github from '../images/icons8-github.svg';
import linkedin from '../images/icons8-linkedin.svg';
import medium from '../images/medium.svg';
import portrait from "../images/portrait2.png";

const Home = () => {
    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    const socialMedia = () => (
        <div className='flex flex-col gap-2'>
            <img src={facebook} className= {`${darkMode? '':'invert-colors'} w-5 h-5`} alt="facebook"/>
            <img src={github} className= {`${darkMode? '':'invert-colors'} w-5 h-5`} alt="github"/>
            <img src={linkedin} className= {`${darkMode? '':'invert-colors'} w-5 h-5`} alt="linkedin"/>
            <img src={medium} className= {`${darkMode? '':'invert-colors'} w-5 h-5`} alt="medium"/>
        </div>
    );

    const valuableCarussel = () => (
        <div className={`w-full flex flex-row justify-center gap-7 my-6 px-7`}>
            {Object.keys(currentLanguage.home.carusel).map((key) => (
                <div key={key} className= {`border-solid border ${darkMode? 'border-lightSecond':'border-darkSecond'} p-2 w-1/6 rounded-tr-lg` }>
                    <h3 className={`${darkMode? 'text-lightText':'text-darkText'} text-2xl mb-2`}>{currentLanguage.home.carusel[key].amount}</h3>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.carusel[key].title}</p>
                    </div>
            ))}
        </div>
    );

    const features = () => (
        <div className='w-full my-6 flex flex-col gap-2 px-7'>
            <div className='self-start ml-5 flex flex-col items-start'>
                <p className={`${darkMode? 'text-lightSecond':'text-darkSecond'} `}>{currentLanguage.home.featureTitle}</p>
                <h2 className={`${darkMode? 'text-lightText':'text-darkText'} text-4xl`}>{currentLanguage.home.featureSub}</h2>
            </div>
            <div className='flex flex-row gap-7 my-6 w-full justify-center '>
                {Object.keys(currentLanguage.home.features).map((key) => (
                    <div key={key} className={`border-solid border w-1/4 p-9 rounded-tr-lg rounded-bl-lg ${darkMode? 'border-lightSecond':'border-darkSecond'}`}>
                        <h3 className={`${darkMode? 'text-lightText':'text-darkText'} text-2xl mb-2`}>{currentLanguage.home.features[key].title}</h3>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.features[key].description}</p>
                        </div>
                ))}

            </div>
        </div>
    );

    return (
        <div className='w-full mheader' >
            <div className='flex flex-row w-full justify-between  my-7 h-max py-4 px-7'>
                <div className='w-2/4 flex flex-col gap-2'>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} ${darkMode? 'bg-lightSecond':'bg-darkSecond'} w-max rounded p-2`}>{currentLanguage.home.firstSub}</p>
                    <h1 className={`${darkMode? 'text-lightText':'text-darkText'} text-4xl`}>{currentLanguage.home.mainTitle}</h1>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-xl`}>{currentLanguage.home.secondSub}</p>
                </div>
                <div>
                    <img src={portrait} alt="Luis Sanchez" />
                </div>
                <div className='mr-3'>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} vertical-text mb-3`}>{currentLanguage.home.followMe}</p>
                    {socialMedia()}
                </div>
            </div>
            
            {/* valuables carussel */}
            {valuableCarussel()}

           {features()}

            {/* have you a project on mind */}
            <div className='flex justify-center my-7'>
                <div className='rounded-full border-solid border w-72 h-72 self-center flex flex-col items-center justify-center p-7'>
                    <h2 className={`${darkMode? 'text-lightText':'text-darkText text-lg'}`}>{currentLanguage.home.proyectMind}</h2>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.projectSub}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.contact}</p>
                </div>
            </div>
        
        </div>
    );
    }

export default Home;