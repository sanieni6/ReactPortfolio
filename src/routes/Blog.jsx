import construction from "../images/under-construction.gif"
import { useSelector } from "react-redux";

const Blog = () => {

    const { darkMode } = useSelector((store) => store.mode);
    const { currentLanguage } = useSelector((store) => store.languages);
    
    return (
        <div className= "flex flex-col w-full items-center justify-center mheader">
            <h1 className={`${darkMode? 'text-lightText':'text-darkText'}`}>{currentLanguage.blog}</h1>
            <iframe src={construction} className="md:w-3/4 h-screen  overflow-y-hidden" ></iframe>
        
        </div>
    );
    }

export default Blog;
