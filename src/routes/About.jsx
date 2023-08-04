import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import portrait from "../images/portrait2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const { darkMode } = useSelector((store) => store.mode);
  const { currentLanguage } = useSelector((store) => store.languages);

  const pointer = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );

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
      <div className="flex flex-col w-5/6 items-center justify-center">
        <h2
          className={`${
            darkMode ? "text-lightText" : "text-darkText"
          }  mb-7`}
        >
          {currentLanguage.about.experience.title}
        </h2>
          {Object.keys(currentLanguage.about.experience.list).map((key) => (
            <div key={key} className="flex gap-4 justify-center">
                <div className="flex gap-2 ">
                    <p
                    className={`${
                        darkMode ? "text-lightText" : "text-darkText"
                      } text-left text-1xl`}
                    >
                        {currentLanguage.about.experience.list[key].year}
                    </p>
                    <div className="w-2 flex-1 flex flex-col  justify-start items-center">
                        <div className= {`${
              darkMode ? "bg-lightSecond" : "bg-darkSecond"
            } w-4 h-4 rounded-full mt-1`}></div>
                        <hr className= {`${
              darkMode ? "border-lightSecond" : "border-darkSecond"
            } border-l flex-grow m-1`} />
                    </div>
                </div>
                <div className="w-4/5">
              <p
                className={`${
                  darkMode ? "text-lightText" : "text-darkText"
                } text-left text-2xl`}
              >
                {currentLanguage.about.experience.list[key].position}
              </p>
              <p
                className={`${
                  darkMode ? "text-lightText" : "text-darkText"
                } text-left`}
              >
                {currentLanguage.about.experience.list[key].type}
              </p>
              <p
                className={`${
                  darkMode ? "text-lightText" : "text-darkText"
                } text-left`}
              >
                {currentLanguage.about.experience.list[key].ubication}
              </p>
              <p
                className={`${
                  darkMode ? "text-lightText" : "text-darkText"
                } text-left`}
              >
                {currentLanguage.about.experience.list[key].address}
              </p>
              <div className="w-4/5">
                {currentLanguage.about.experience.list[key].descrip.map(
                  (text, index) => (
                    <p 
                    key={index}
                    className={`${
                      darkMode ? "text-lightText" : "text-darkText"
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
      <div>
        <div>
        <h2
          className={`${
            darkMode ? "text-lightText" : "text-darkText"
          } text-left mb-7`}
        >
          {currentLanguage.about.education.title}
        </h2>
        <p
        className={`${
            darkMode ? "text-lightText" : "text-darkText"
          } text-left mb-7`}
        >Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>
        </div>
        <div className="w-full flex flex-col gap-7">
          {Object.keys(currentLanguage.about.education.list).map((key) => (
            <div key={key} className="flex gap-2 w-full p-2 border">
                <div className="">
                <img src={currentLanguage.about.education.list[key].image} alt={currentLanguage.about.education.list[key].institution} className="w-20 h-full" />
                </div>
                
                <div>
              <p
                className={`${
                  darkMode ? "text-lightText" : "text-darkText"
                } text-left`}
              >
                {currentLanguage.about.education.list[key].institution}
              </p>
              <p
                className={`${
                  darkMode ? "text-lightText" : "text-darkText"
                } text-left`}
              >
                {currentLanguage.about.education.list[key].grade}
              </p>
              <p
                className={`${
                  darkMode ? "text-lightText" : "text-darkText"
                } text-left`}
              >
                {currentLanguage.about.education.list[key].startDate}
              </p>
              <p
                className={`${
                  darkMode ? "text-lightText" : "text-darkText"
                } text-left`}
              >
                {currentLanguage.about.education.list[key].endDate}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-row w-full justify-between  my-7 h-max py-4">
        {/* who am i? */}
        <div className="flex flex-col items-start ml-7">
          <h2
            className={`${
              darkMode ? "text-lightSecond" : "text-darkSecond"
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
          <p
            className={`${
              darkMode ? "text-lightText" : "text-darkText"
            } text-left`}
          >
            {currentLanguage.about.whoAmI.fouth}
          </p>
          <p
            className={`${
              darkMode ? "text-lightText" : "text-darkText"
            } text-left`}
          >
            {currentLanguage.about.whoAmI.fifth}
          </p>
          <p
            className={`${
              darkMode ? "text-lightText" : "text-darkText"
            } text-left`}
          >
            {currentLanguage.about.whoAmI.sixth}
          </p>
          <div>
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left flex`}
            >
              {pointer()} {currentLanguage.about.whoAmI.hobbie1}
            </p>
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left flex`}
            >
              {pointer()} {currentLanguage.about.whoAmI.hobbie2}
            </p>
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left flex`}
            >
              {pointer()} {currentLanguage.about.whoAmI.hobbie3}
            </p>
            <p
              className={`${
                darkMode ? "text-lightText" : "text-darkText"
              } text-left flex`}
            >
              {pointer()} {currentLanguage.about.whoAmI.hobbie4}{" "}
            </p>
          </div>
          {/* quote */}
          <div>
            <p className={`${darkMode ? "text-lightText" : "text-darkText"}`}>
              {currentLanguage.about.whoAmI.quote}
            </p>
            <p className={`${darkMode ? "text-lightText" : "text-darkText"}`}>
              {currentLanguage.about.whoAmI.author}
            </p>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={portrait} alt="Luis Sanchez" />
        </div>
      </div>
      {/* skills */}
      <div>{SkillsCarousel()}</div>

      {/* my experience */}
      <section className="w-full flex flex-col justify-center items-center">
        {experience()}
        {education()}
      </section>
    </div>
  );
};

export default About;
