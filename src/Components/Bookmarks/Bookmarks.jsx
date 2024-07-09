import React from 'react';
import ReadingTime from './ReadingTime/ReadingTime';
import Bookmark from './Bookmark/Bookmark';
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks,readTime}) => {
  return (
    <div>
        <ReadingTime readTime={readTime}>
            
        </ReadingTime>
        <div className='p-3 bg-stone-300 mt-6 rounded'>
            <div className=''>Total Blogs : 4 </div>
            
            <div className='mt-6 max-h-44 overflow-auto'> 
                {
                    bookmarks.map((bookmark,index) => <Bookmark
                        key={index}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    </div>
  );
};

export default Bookmarks;

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime: PropTypes.string,
}