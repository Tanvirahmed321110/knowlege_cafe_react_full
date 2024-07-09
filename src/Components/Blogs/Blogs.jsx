import React from 'react';
import Blog from './Blog/Blog';
import PropTypes from 'prop-types';


const Blogs = ({blogs,toggleBookmark,handleReadTime,isBookmark}) => {

  return (
    <div>
        <div className='bg-gray-5000 '>
            <div>
                {
                    blogs.map(blog=> <Blog 
                        key={blog.id}
                        handleReadTime={handleReadTime}
                        toggleBookmark={toggleBookmark}
                        isBookmark={isBookmark}
                        blog={blog}>
                    </Blog>)
                }
            </div>
        </div>
    </div>
  );
};

export default Blogs;

Blogs.propTypes = {
    blogs: PropTypes.array,
    toggleBookmark: PropTypes.func,
    handleReadTime: PropTypes.func,
    isBookmark: PropTypes.boolean
}