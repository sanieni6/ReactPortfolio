import { useState } from "react";
import { useSelector } from "react-redux";

const Portfolio = () => {

    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);

    const [selectedTags, setSelectedTags] = useState([]);

    const toggleTag = (tag) => {
        if (tag === "all") {
            setSelectedTags([]);
        } else {
            if (selectedTags.includes(tag)) {
                setSelectedTags(selectedTags.filter(t => t !== tag));
            } else {
                setSelectedTags([...selectedTags, tag]);
            }
        }
    };

    const displayProjects = () => {
        let projects = [];
        if (selectedTags.length === 0) {
            projects = currentLanguage.projects.list
        } else {
            Object.values(currentLanguage.projects.list).forEach(project => {
                if (selectedTags.some(tag => project.tags.includes(tag))) {
                    projects.push(project);
                }
            });
        }
        return Object.values(projects).map((project,index) => {
            return (
                <div key={index} className={`projects-transition w-1/4 flex flex-col gap-3 relative justify-between items-center border ${darkMode? 'border-lightSecond':'border-darkSecond'} py-4 px-4 rounded`}>
                    <div className="w-full h-max flex flex-col gap-3">
                    <img src={project.image} alt={project.name} className="w-full h-44"/>
                    <div>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-2xl`}>{project.title}</p>
                    <p className={`${darkMode? 'text-lightText':'text-darkText'} text-left`}>{project.Description}</p>
                    </div>
                    </div>
                    <div className="flex gap-5">
                    <a href={project.code} className={`${darkMode? 'text-lightText':'text-darkText'} border ${darkMode? 'border-lightSecond':'border-darkSecond'} ${darkMode? 'bg-lightSecond':'bg-darkSecond'} py-2 px-3 rounded`}>Github</a>
                    <a href={project.live} className={`${darkMode? 'text-lightText':'text-darkText'} border ${darkMode? 'border-lightSecond':'border-darkSecond'} ${darkMode? 'bg-lightSecond':'bg-darkSecond'} py-2 px-3 rounded`}>Live</a>
                    </div>
                </div>
            );
        });
    };
    return (
        <div className="w-full flex flex-col justify-center items-center mheader py-7">
        <div>
            <h2 className={`${darkMode? 'text-lightText':'text-darkText'} text-3xl mb-5`}>{currentLanguage.projects.title}</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-5 w-1/4 mb-7">
        <button onClick={() => toggleTag('all')} className={`${selectedTags.length === 0 ? 'bg-darkSecond' : ''} ${darkMode? 'text-lightText':'text-darkText'} border px-2 py-1 ${darkMode? 'border-lightSecond':'border-darkSecond'}`}>All</button>
        {['Javascript', 'CSS', 'SASS', 'React', 'API', 'AXIOS', 'Redux', 'Bootstrap', 'Rails', 'Ruby'].map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`${selectedTags.includes(tag) ? 'bg-darkSecond' : ''} ${darkMode? 'text-lightText':'text-darkText'} border px-2 py-1 ${darkMode? 'border-lightSecond':'border-darkSecond'}`}
          >
            {tag}
          </button>
        ))}
        </div>
        <div className="w-10/12 flex flex-wrap gap-4 justify-center">
            {displayProjects()}
        </div>
        </div>
    );
    }

export default Portfolio;