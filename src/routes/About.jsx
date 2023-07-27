import { useSelector } from 'react-redux';

const About = () => {

    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    return (
        <div>
            <div>
                {/* who am i? */}
                <div>
                    <h2 className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.title}</h2>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.second}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.third}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.fouth}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.fifth}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.sixth}</p>
                    <div>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.hobbie1}</p>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}> {currentLanguage.about.whoAmI.hobbie2}</p>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}> {currentLanguage.about.whoAmI.hobbie3}</p>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.hobbie4} </p>
                    </div>
                    {/* quote */}
                    <div>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.quote}</p>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.author}</p>
                    </div>
                </div>
                {/* image */}
                <div>
                    <img src="" alt="Luis Sanchez" />
                </div>
            </div>
            {/* skills */}
            <div>
                <div>
                    <h2>Skills</h2>
                    <div>
                        <div>
                        <img src="" alt="javascript" />
                        <p>Javascript</p>
                        </div>
                        <div>
                        <img src="" alt="react" />
                        <p>React</p>
                        </div>
                        <div>
                        <img src="" alt="redux" />
                        <p>Redux</p>
                        </div>
                        <div>
                        <img src="" alt="git" />
                        <p>Git Source Control</p>
                        </div>
                        <div>
                        <img src="" alt="Html & CSS" />
                        <p>Html & CSS</p>
                        </div>
                        <div>
                        <img src="" alt="PostgreSQL" />
                        <p>PostgreSQL</p>
                        </div>
                        <div>
                        <img src="" alt="Ruby" />
                        <p>Ruby</p>
                        </div>
                        <div>
                        <img src="" alt="ROR" />
                        <p>Ruby on Rails</p>
                        </div>
                        <div>
                        <img src="" alt="python" />
                        <p>Python</p>
                        </div>
                    </div>
                </div> 
                {/* soft skills */}
                <div>
                    <h2>Soft Skills</h2>
                    <div>
                        <div>
                            <p>Teamwork</p>
                        </div>
                        <div>
                            <p>Communication</p>
                        </div>
                        <div>
                            <p>Agile Scrum</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Other Skills</h2>
                    <div>
                        <div>
                            <p>Robotics</p>
                        </div>
                        <div>
                            <p>Microcontrollers Programming</p>
                        </div>
                        <div>
                            <p>CCNA: Routing and Switching</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* my experience */}
            <section>
                <div>
                <h2>My Experience</h2>
                <div>
                    <div>
                        <h3>Full Stack Web Developer</h3>
                        <p>Henry</p>
                        <p>2021 - Present</p>
                        <p>Remote</p>
                    </div>
                    <div>
                        <h3>Telematics Engineer</h3>
                        <p>Autotransportes de Carga Tresguerras</p>
                        <p>2019 - 2021</p>
                        <p>Queretaro, Mexico</p>
                    </div>
                </div>
                </div>
                <div>
                <h2>My Education</h2>
                <div>
                    <div>
                        <h3>Full Stack Web Developer</h3>
                        <p>Microverse</p>
                        <p>2023 - Present</p>
                        <p>Remote</p>
                    </div>
                    <div>
                        <h3>Telematics Engineer</h3>
                        <p>Universidad Tecnica Estatal de Quevedo</p>
                        <p>2017 - 20212</p>
                        <p>Quevedo, Ecuador</p>
                    </div>
                </div>
                </div>
            </section>
        </div>             
    );
    }

export default About;