import { useSelector } from 'react-redux';
import facebook from '../images/icons8-facebook.svg';
import github from '../images/icons8-github.svg';
import linkedin from '../images/icons8-linkedin.svg';
import medium from '../images/medium.svg';
const Home = () => {
    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    const socialMedia = () => (
        <div>
            <img src={facebook} className= {`${darkMode? '':'invert-colors'} w-7 h-7`} alt="facebook"/>
            <img src={github} className= {`${darkMode? '':'invert-colors'} w-7 h-7`} alt="github"/>
            <img src={linkedin} className= {`${darkMode? '':'invert-colors'} w-7 h-7`} alt="linkedin"/>
            <img src={medium} className= {`${darkMode? '':'invert-colors'} w-7 h-7`} alt="medium"/>
        </div>
    );

    
    return (
        <div >
            <div>
            <div>
                <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.firstSub}</p>
                <h1 className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.mainTitle}</h1>
                <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.secondSub}</p>
            </div>
            <div>
                <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.home.followMe}</p>
                {socialMedia()}
            </div>
            </div>
            
            {/* valuables carussel */}
            <div>
                <div>
                    <h3>02</h3>
                    <p>Awards</p>
                    {/* telematics engineer */}
                </div>
                <div>
                    <h3>50+</h3>
                    <p>Clients</p>
                    {/* full stack web developer */}
                </div>
                <div>
                    <h3>01</h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3>20+</h3>
                    <p>Projects</p>
                </div>
            </div>

            <div>
                <div>
                <p>Features</p>
                <h2>What I Do</h2>
                </div>
                <div>
                    <div>
                        <h3>Businness Strategy</h3>
                        <p>shomething goes here</p>
                    </div>
                    <div>
                        <h3>App Development</h3>
                        <p>shomething goes here</p>
                    </div>
                    <div>
                        <h3>Business strategy</h3>
                        <p>shomething goes here</p>
                    </div>
                </div>

            </div>

            {/* have you a project on mind */}
            <div>
                <div>
                    <h2>Have a project on mind?</h2>
                    <p>Let me help you</p>
                    <p>luissanchezzamora23@gmail.com</p>
                </div>
            </div>
        
        </div>
    );
    }

export default Home;