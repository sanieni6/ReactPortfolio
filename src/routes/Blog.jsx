import construction from "../images/under-construction.gif"

const Blog = () => {
    
    return (
        <div className= "flex flex-col w-full items-center justify-center mheader">
            <h1>Blog Webpage Under Construction</h1>
            <iframe src={construction} className="md:w-3/4 h-screen  overflow-y-hidden" ></iframe>
        
        </div>
    );
    }

export default Blog;
