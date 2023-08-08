import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import portrait from "../images/portrait2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import water from "../images/water.svg";
import calisthenics from "../images/weightlifting.svg";
import reading from "../images/reading-books.svg";
import movie from "../images/movie-film.svg";
import data from "../images/data-science.svg";

const About = () => {
  const { darkMode } = useSelector((store) => store.mode);
  const { currentLanguage } = useSelector((store) => store.languages);

  const skillSections = (skills) => (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center">
        {Object.keys(skills.list).map((key) => (
          <div key={key} className="w-1/4 p-2 flex flex-col items-center mx-2">
            <img
              src={skills.list[key].icon}
              alt={skills.list[key].alt}
              className="w-16 h-16"
            />
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left`}
            >
              {skills.list[key].name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const SkillsCarousel = () => {
    const skillsSet = [
      skillSections(currentLanguage.about.skills),
      skillSections(currentLanguage.about.softSkills),
      skillSections(currentLanguage.about.otherSkills),
    ];

    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
      ref: sliderRef,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => {
        setActiveSlide(next);
      },
    };

    const handleButtonClick = (index) => {
      sliderRef.current.slickGoTo(index);
      setActiveSlide(index);
    };

    return (
      <div className="w-full relative">
        <div className="flex justify-center space-x-4 mt-4">
          {skillsSet.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`${darkMode ? "text-lightText" : "text-darkText"} ${
                index === activeSlide
                  ? "font-bold"
                  : "text-opacity-50 font-normal"
              } transition duration-300`}
            >
              {index === 0
                ? "Skills"
                : index === 1
                ? "Soft Skills"
                : "Other Skills"}
            </button>
          ))}
        </div>

        <div className="overflow-hidden relative">
          <Slider {...settings}>
            {skillsSet.map((skill, index) => (
              <div key={index} className="flex">
                {skill}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };

  const experience = () => {
    return (
      <div className={`flex flex-col w-5/6 items-center justify-center my-7`}>
        <h2
          className={`${
            darkMode ? "text-darkText" : "text-darkText"
          }  mb-7 text-3xl`}
        >
          {currentLanguage.about.experience.title}
        </h2>
          {Object.keys(currentLanguage.about.experience.list).map((key) => (
            <div key={key} className="flex gap-4 justify-center mb-4">
                <div className="flex gap-2 ">
                    <p
                    className={`${
                        darkMode ? "text-darkText" : "text-darkText"
                      } text-left text-xl`}
                    >
                        {currentLanguage.about.experience.list[key].year}
                    </p>
                    <div className="w-2 flex-1 flex flex-col  justify-start items-center">
                        <div className= {`${
              darkMode ? "bg-lightSecond" : "bg-darkSecond"
            } w-4 h-4 rounded-full mt-2`}></div>
                        <hr className= {`${
              darkMode ? "border-lightSecond" : "border-darkSecond"
            } border-l flex-grow m-1`} />
                    </div>
                </div>
                <div className="w-4/5">
              <p
                className={`${
                  darkMode ? "text-darkText" : "text-darkText"
                } text-left text-2xl`}
              >
                {currentLanguage.about.experience.list[key].position}
              </p>
              <p
                className={`${
                  darkMode ? "text-darkText" : "text-darkText"
                } text-left text-xl`}
              >
                {currentLanguage.about.experience.list[key].ubication} - {currentLanguage.about.experience.list[key].type}
              </p>
              <p
                className={`${
                  darkMode ? "text-darkText" : "text-darkText"
                } text-left text-xl`}
              >
                {currentLanguage.about.experience.list[key].address}
              </p>
              <div className="w-4/5 mt-5">
                {currentLanguage.about.experience.list[key].descrip.map(
                  (text, index) => (
                    <p 
                    key={index}
                    className={`${
                      darkMode ? "text-darkText" : "text-darkText"
                    } text-left`}
                    >{text}</p>
                  ))}
              </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  const education = () => {
    return (
      <div className=" w-full md:w-3/4 flex flex-col justify-center items-center">
        <div className="w-3/4 flex flex-col justify-center">
        <h2
          className={`${
            darkMode ? "text-lightText" : "text-darkText"
          } my-7 text-3xl`}
        >
          {currentLanguage.about.education.title}
        </h2>
        <p
        className={`${
            darkMode ? "text-lightText" : "text-darkText"
          } mb-7`}
        >Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>
        </div>
        <div className="w-full flex flex-col gap-7 justify-center items-center">
          {Object.keys(currentLanguage.about.education.list).map((key) => (
            <div key={key} className={`${
              darkMode ? "bg-lightThird" : "bg-darkThird"
            } mb-7 flex gap-2 w-5/6`}>
                <div className="w-2/4 md:w-auto">
                <img src={currentLanguage.about.education.list[key].image} alt={currentLanguage.about.education.list[key].institution} className="w-full md:w-28 h-full" />
                </div>
                
                <div className="p-2 mr-4 w-2/4 md:w-4/5">
              <p
                className={`${
                  darkMode ? "text-darkText" : "text-darkText"
                } text-left text-xl md:text-3xl`}
              >
                {currentLanguage.about.education.list[key].grade}
              </p>
              <p
                className={`${
                  darkMode ? "text-darkText" : "text-darkText"
                } text-left text-lg md:text-xl`}
              >
                {currentLanguage.about.education.list[key].institution}
              </p>
              <p
                className={`${
                  darkMode ? "text-darkText" : "text-darkText"
                } text-left text-sm md:text-lg`}
              >
                {currentLanguage.about.education.list[key].startDate} - {currentLanguage.about.education.list[key].endDate}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mheader">
      <div id="main" className="flex flex-row w-full md:justify-between  md:my-7 h-max py-4">
        {/* who am i? */}
        <div className="flex flex-col items-start px-5 md:ml-7 md:p-0 md:w-2/4">
          <h2
            className={`${
              darkMode ? "text-lightFourth" : "text-darkSecond"
            } text-left text-4xl`}
          >
            {currentLanguage.about.whoAmI.title}
          </h2>
          <p
            className={`${
              darkMode ? "text-lightText" : "text-darkText"
            } text-left`}
          >
            {currentLanguage.about.whoAmI.second}
          </p>
          <p
            className={`${
              darkMode ? "text-lightText" : "text-darkText"
            } text-left`}
          >
            {currentLanguage.about.whoAmI.third}
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left flex centered content-center`}
            >
              <img src={reading} alt="reading" className="w-7 h-7" /> {currentLanguage.about.whoAmI.hobbie1}
            </p>
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left flex`}
            >
              <img src={calisthenics} alt="calisthenics" className="w-7 h-7" /> {currentLanguage.about.whoAmI.hobbie2}
            </p>
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left flex`}
            >
              <img src={data} alt="data" className="w-7 h-7" /> {currentLanguage.about.whoAmI.hobbie3}
            </p>
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left flex`}
            >
              <img src={movie} alt="movie" className="w-7 h-7" /> {currentLanguage.about.whoAmI.hobbie4}
            </p>
          </div>
          {/* quote */}
          <div className="flex flex-col items-center place-self-center">
          <img src={portrait} alt="Luis Sanchez" className="flex md:hidden" />
            <p className={`${darkMode ? "text-lightText" : "text-darkText"} quote-text text-xl`}>
              {currentLanguage.about.whoAmI.quote}
            </p>
            <p className={`${darkMode ? "text-lightText" : "text-darkText"} quote-text`}>
              {currentLanguage.about.whoAmI.author}
            </p>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={portrait} alt="Luis Sanchez" className="hidden md:flex" />
        </div>
      </div>
      {/* skills */}
      <div className={`${darkMode? 'bg-lightFifth':'bg-darkFourth'} py-5`}>
        {SkillsCarousel()}
        </div>

      {/* my experience */}
      <section className={` ${darkMode? 'bg-lightFourth':'bg-darkFourth'} w-full flex flex-col justify-center items-center`}>
        {experience()}
        
      </section>
      <section className="w-full flex flex-col justify-center items-center">
      {education()}
      </section>
    </div>
  );
};

export default About;
