import PropTypes from 'prop-types';

const ReadingTime = ({readTime}) => {
  return (
    <div>
       <div className=''>
            <div 
                className="text-xl p-3 text-center rounded-md bg-slate-500 
                font-semibold">Reading Times: {readTime}
            </div>
        </div>    
    </div>
  );
};

export default ReadingTime;

ReadingTime.propTypes = {
    readTime: PropTypes.string
}