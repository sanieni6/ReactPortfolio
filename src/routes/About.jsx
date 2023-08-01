import { useSelector } from 'react-redux';
import portrait from '../images/portrait2.png';

const About = () => {

    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    const pointer = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
    );

    const skillSections = (skills) => (
        <div className='flex flex-col items-center'>
            <h3 className={`${darkMode? 'text-lightSecond':'text-darkSecond'} text-left text-2xl`}>{skills.title}</h3>
            <div className='flex flex-row justify-center'>
                {Object.keys(skills.list).map((key) => (
                    <div key={key} className='flex flex-col items-center mx-2'>
                        <img src={skills.list[key].icon} alt={skills.list[key].alt} className='w-16 h-16' />
                        <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left`}>{skills.list[key].name}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className='w-full'>
            <div className='flex flex-row w-full justify-between  my-7 h-max py-4'>
                {/* who am i? */}
                <div className='flex flex-col items-start ml-7'>
                    <h2 className={`${darkMode? 'text-lightSecond':'text-darkSecond'} text-left text-4xl`}>{currentLanguage.about.whoAmI.title}</h2>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left`}>{currentLanguage.about.whoAmI.second}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left`}>{currentLanguage.about.whoAmI.third}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left`}>{currentLanguage.about.whoAmI.fouth}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left`}>{currentLanguage.about.whoAmI.fifth}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left`}>{currentLanguage.about.whoAmI.sixth}</p>
                    <div>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left flex`}>{pointer()} {currentLanguage.about.whoAmI.hobbie1}</p>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left flex`}>{pointer()} {currentLanguage.about.whoAmI.hobbie2}</p>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left flex`}>{pointer()} {currentLanguage.about.whoAmI.hobbie3}</p>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left flex`}>{pointer()} {currentLanguage.about.whoAmI.hobbie4} </p>
                    </div>
                    {/* quote */}
                    <div>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.quote}</p>
                        <p className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.about.whoAmI.author}</p>
                    </div>
                </div>
                {/* image */}
                <div>
                    <img src={portrait} alt="Luis Sanchez" />
                </div>
            </div>
            {/* skills */}
            <div>
                <div>
                    <h2>Skills</h2>
                    <div>
                        <div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 28 28" viewBox="0 0 28 28" id="javascript"><path fill="#FFE577" d="M24.387,2.917c2.86,3.08,3.122,18.736-2.307,21.691S1.313,27.689,1.177,18.95S0.159,2.666,8.303,1.974S21.469-0.227,24.387,2.917z"></path><path d="M25.5,26h-23C2.224,26,2,25.776,2,25.5v-23C2,2.224,2.224,2,2.5,2h23C25.776,2,26,2.224,26,2.5v23C26,25.776,25.776,26,25.5,26z M3,25h22V3H3V25z M11.787,24.228c-0.823,0-1.585-0.197-2.229-0.582c-0.605-0.364-1.111-0.939-1.462-1.665c-0.112-0.231-0.031-0.509,0.188-0.644l1.749-1.078c0.079-0.048,0.169-0.074,0.262-0.074c0.3,0,0.432,0.227,0.511,0.363c0.237,0.397,0.369,0.566,0.624,0.694c0.005-0.012,0.14,0.033,0.308,0.033c0.193,0,0.423-0.048,0.524-0.259c0.103-0.218,0.094-1.065,0.088-1.684l-0.005-0.698l0.009-5.563c0-0.276,0.224-0.5,0.5-0.5h2.154c0.139,0,0.271,0.058,0.366,0.16c0.095,0.102,0.143,0.238,0.132,0.376v2c0.003,1.317,0.005,2.63-0.002,3.942l0.006,0.516c0.017,1.055,0.033,2.051-0.448,2.928c-0.366,0.747-1.092,1.32-2.036,1.592C12.603,24.181,12.188,24.228,11.787,24.228z M9.216,21.938c0.237,0.364,0.528,0.654,0.855,0.851c0.725,0.432,1.711,0.553,2.707,0.329c0.444-0.129,1.075-0.43,1.396-1.084c0.364-0.666,0.351-1.493,0.335-2.452l-0.006-0.533c0.008-1.314,0.005-2.625,0.002-3.939l-0.002-1.538h-1.152l-0.008,5.063l0.005,0.688c0.012,1.167,0.008,1.792-0.205,2.161c-0.379,0.794-1.323,0.924-2.083,0.687c-0.469-0.227-0.724-0.504-0.924-0.8L9.216,21.938z M10.294,20.738l-0.388,0.254L10.294,20.738z M10.317,20.723l0.007-0.005L10.317,20.723z M20.054,24.127c-1.346,0-2.688-0.468-3.493-1.281l-0.212-0.241c-0.254-0.286-0.474-0.533-0.667-0.974c-0.103-0.234-0.012-0.507,0.209-0.634l1.754-1.007c0.231-0.131,0.521-0.062,0.667,0.158c0.447,0.677,0.78,0.936,1.373,1.067c0.505,0.06,0.996-0.037,1.198-0.256c0.038-0.042,0.153-0.166,0.091-0.49c-0.092-0.293-0.745-0.568-1.375-0.833c-0.612-0.257-1.305-0.549-1.903-0.996c-0.74-0.498-1.25-1.367-1.377-2.369c-0.126-0.995,0.149-1.959,0.757-2.647c0.416-0.514,1.111-0.927,1.895-1.118l0.731-0.095c1.429-0.036,2.418,0.332,3.151,1.154c0.2,0.194,0.358,0.419,0.61,0.811c0.072,0.112,0.096,0.25,0.067,0.38s-0.11,0.244-0.224,0.314c-0.687,0.428-0.687,0.428-1.673,1.072c-0.122,0.079-0.271,0.102-0.41,0.062c-0.139-0.04-0.255-0.137-0.316-0.268c-0.143-0.304-0.367-0.517-0.63-0.598c-0.22-0.066-0.483-0.046-0.65,0.05c-0.121,0.07-0.154,0.158-0.168,0.218c-0.022,0.079-0.041,0.139,0.04,0.429c0.083,0.178,0.556,0.381,1.012,0.578c0.147,0.063,0.295,0.127,0.44,0.195c1.959,0.794,2.941,1.762,3.159,3.127c0.011,0.065,0.008,0.13-0.006,0.191c0.086,0.741-0.037,1.281-0.125,1.552c-0.331,1.132-1.253,1.946-2.594,2.286C20.954,24.075,20.503,24.127,20.054,24.127z M16.821,21.616c0.077,0.103,0.166,0.202,0.274,0.325l0.2,0.228c0.803,0.81,2.465,1.178,3.843,0.828c0.57-0.144,1.572-0.545,1.882-1.605c0.062-0.192,0.179-0.667,0.058-1.354c-0.009-0.055-0.01-0.109-0.001-0.162c-0.165-0.652-0.671-1.397-2.527-2.15c-0.16-0.074-0.299-0.134-0.436-0.193c-0.634-0.273-1.291-0.556-1.556-1.163c-0.121-0.418-0.162-0.7-0.065-1.02c0.078-0.336,0.299-0.633,0.632-0.826c0.408-0.238,0.946-0.292,1.442-0.142c0.369,0.114,0.691,0.337,0.942,0.646c0.402-0.262,0.576-0.375,0.827-0.532c-0.075-0.101-0.138-0.172-0.208-0.241c-0.561-0.626-1.253-0.876-2.354-0.847l-0.624,0.081c-0.511,0.128-1.022,0.424-1.313,0.782c-0.431,0.488-0.618,1.166-0.528,1.875c0.09,0.706,0.451,1.334,0.964,1.681c0.52,0.387,1.126,0.643,1.712,0.889c0.901,0.379,1.753,0.738,1.958,1.51c0.002,0.009,0.004,0.018,0.006,0.027c0.142,0.694-0.103,1.137-0.333,1.386c-0.433,0.468-1.2,0.673-2.102,0.562c-0.838-0.184-1.342-0.576-1.765-1.117L16.821,21.616z"></path></svg> */}
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
            {skillSections(currentLanguage.about.skills)}

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