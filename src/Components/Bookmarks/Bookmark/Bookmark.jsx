import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
  return (
    <div>
        <div className='rounded-md p-4 mt-4 bg-slate-100'>
            {bookmark.title}
        </div>
    </div>
  );
};

export default Bookmark;

Bookmark.propTypes = {
    bookmark: PropTypes.object
}