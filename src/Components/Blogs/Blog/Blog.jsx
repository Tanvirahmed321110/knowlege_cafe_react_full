import { CiBookmarkCheck } from "react-icons/ci";
import PropTypes from 'prop-types';


const Blog = ({blog,toggleBookmark,handleReadTime,isBookmark}) => {
    
    const {title,id,cover,author_img,author,posted_date,reading_time,hashtags} = blog
    
  return (
    <div>
        <div className='mb-8'>
            <div className='space-y-2 border p-2 rounded'>
                <img className="w-full" src={cover} alt={`image in ${title}`} />
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img className="rounded w-12" src={author_img} alt="" />
                        <div className="">
                            <div className="text-md font-semibold">{author}</div>
                            <div className="text-xs text-gray-500">{posted_date}</div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                        <div>{reading_time}</div>
                        <button 
                            onClick={()=>toggleBookmark(blog)}
                            className="text-xl">
                                {isBookmark ? "X" : <CiBookmarkCheck />  }
                                
                        </button>
                    </div>
                </div>
                
                {/* title */}
                <h2 className="text-2xl font-semibold">{title}</h2>
                
                {/* tag */}
                <div>
                    {hashtags.map((hash,index) => <span className="me-2 text-sm text-blue-600" key={index}>#{hash}</span>)}
                </div>
                
                {/* mark and read */}
                <button 
                    onClick={()=>handleReadTime(reading_time)}
                    className="text-sm text-red-800 border p-2 rounded 
                     hover:border-red-300 focus:bg-slate-300">
                        Mark and Read</button>
            </div>
        </div>
    </div>
  );
};

export default Blog;


Blog.propTypes = {
    blog: PropTypes.object,
    toggleBookmark: PropTypes.func,
    handleReadTime: PropTypes.func,
    isBookmark: PropTypes.boolean
}