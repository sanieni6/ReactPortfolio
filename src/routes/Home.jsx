import { useSelector } from 'react-redux';
import facebook from '../images/icons8-facebook.svg';
import github from '../images/icons8-github.svg';
import linkedin from '../images/icons8-linkedin.svg';
import medium from '../images/medium.svg';
import portrait from "../images/portrait2.png";
import { useState, useEffect } from 'react';

const Home = () => {
    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    const socialMedia = () => (
        <div className='flex justify-center md:flex-col gap-2'>
            <a href='https://www.facebook.com/' rel="noreferrer" target="_blank" className= {`w-8 h-8 md:w-5 md:h-5`}><img src={facebook} className= {`${darkMode? '':'invert-colors'} w-8 h-8 md:w-5 md:h-5`} alt="facebook" /></a>
            <a href='https://github.com/sanieni6' rel="noreferrer" target="_blank" className= {`w-8 h-8 md:w-5 md:h-5`}><img src={github} className= {`${darkMode? '':'invert-colors'} w-8 h-8 md:w-5 md:h-5`} alt="github" /></a>
            <a href='https://www.linkedin.com/in/luissanchezz3/' rel="noreferrer" target="_blank" className= {`w-8 h-8 md:w-5 md:h-5`}><img src={linkedin} className= {`${darkMode? '':'invert-colors'} w-8 h-8 md:w-5 md:h-5`} alt="linkedin" /></a>
            <a href='https://medium.com/@luissanchezzamora23' rel="noreferrer" target="_blank" className= {`w-8 h-8 md:w-5 md:h-5`}><img src={medium} className= {`${darkMode? '':'invert-colors'} w-8 h-8 md:w-5 md:h-5`} alt="medium" /></a>
        </div>
    );

    const ValuableCarussel = () =>{
        const [visible, setVisible] = useState(false);

        useEffect(() => {
          const timer = setTimeout(() => {
            setVisible(true);
          }, 500);
      
          return () => {
            clearTimeout(timer);
          };
        }, []);
        return (
        <div className={`w-full flex flex-col items-center md:items-stretch md:flex-row justify-center gap-7 my-6 px-7 md:px-24`}>
            {Object.keys(currentLanguage.home.carusel).map((key, index) => (
                <div key={key} className= {`border-solid border ${darkMode? 'border-lightSecond':'border-darkSecond'} p-2 w-3/6 md:w-1/6 rounded-tr-lg md:flex-grow fade-in ${visible ? 'active' : ''} ` }  style={{ transitionDelay: `${index * 0.1}s` }}>
                    <h3 className={`${darkMode? 'text-lightText':'text-darkText'} text-2xl mb-2`}>{currentLanguage.home.carusel[key].amount}</h3>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.carusel[key].title}</p>
                    </div>
            ))}
        </div>
    )};

    const features = () => (
        <div className='w-full my-6 flex flex-col gap-2 px-7'>
            <div className='self-start ml-5 flex flex-col items-start'>
                <p className={`${darkMode? 'text-lightSecond':'text-darkSecond'} `}>{currentLanguage.home.featureTitle}</p>
                <h2 className={`${darkMode? 'text-lightText':'text-darkText'} text-4xl`}>{currentLanguage.home.featureSub}</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-7 my-6 w-full justify-center items-center md:items-stretch '>
                {Object.keys(currentLanguage.home.features).map((key) => (
                    <div key={key} className={`border-solid border w-3/4 md:w-1/4 p-9 rounded-tr-lg rounded-bl-lg ${darkMode? 'border-lightSecond':'border-darkSecond'} projects-transition`}>
                        <h3 className={`${darkMode? 'text-lightText':'text-darkText'} text-2xl mb-2`}>{currentLanguage.home.features[key].title}</h3>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.features[key].description}</p>
                        </div>
                ))}

            </div>
        </div>
    );

    return (
        <div className='w-full mheader' >
            <div className='flex flex-col items-center md:items-start md:flex-row w-full md:justify-between  md:my-7 md:h-max md:py-4 md:px-7'>
                <div className='w-3/4 md:w-2/4 flex flex-col gap-2 mb-4 md:mb-0'>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} ${darkMode? 'bg-lightSecond':'bg-darkSecond'}  hidden md:flex md:w-max md:rounded md:p-2`}>{currentLanguage.home.firstSub}</p>
                    <h1 className={`${darkMode? 'text-lightText':'text-darkText'} text-4xl`}>{currentLanguage.home.mainTitle}</h1>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-xl`}>{currentLanguage.home.secondSub}</p>
                </div>
                <div>
                    <img src={portrait} alt="Luis Sanchez" className='hidden md:flex' />
                </div>
                <div className='mr-3'>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} hidden md:flex vertical-text mb-3`}>{currentLanguage.home.followMe}</p>
                    {socialMedia()}
                </div>
            </div>
            
            {/* valuables carussel */}
            {ValuableCarussel()}

           {features()}

            {/* have you a project on mind */}
            <div className='flex justify-center my-7'>
                <div className={`rounded-full border-solid border w-72 h-72 self-center flex flex-col items-center justify-center p-7 ${darkMode? 'border-lightSecond':'border-darkSecond'}`}>
                    <h2 className={`${darkMode? 'text-lightText':'text-darkText text-lg'}`}>{currentLanguage.home.proyectMind}</h2>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.projectSub}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.contact}</p>
                </div>
            </div>
        
        </div>
    );
    }

export default Home;