
import { useEffect,useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
    
    const [blogs,setBlogs] = useState([])
    const [bookmarks,setBookmarks] = useState([])
    const [readTime,setReadTime] = useState(0)
    const [isBookmark,setIsBookmark] = useState(false)
    
    useEffect(()=>{
        fetch('./blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    
    const handleAddBookmark = (blog) =>{
        const newBookmarks = [...bookmarks,blog]
        setBookmarks(newBookmarks)
        setIsBookmark(!isBookmark)
    }
    
    const handleDeleteBookmark = (blog) =>{
        const remaining =  bookmarks.filter(bookmark => bookmark.id !== blog.id)
        setBookmarks(remaining)
    }
    
    
    const toggleBookmark = (blog)=>{
        if(isBookmark){
            handleDeleteBookmark(blog)
        }
        else{
            handleAddBookmark(blog)
        }
        setIsBookmark(!isBookmark)
    }
    
    const handleReadTime = (time) =>{
        const newTime = readTime + time;
        setReadTime(newTime)
    }

    return (
        <div>
             <Header></Header>
             
            <div className="container p-3 pb-0 mx-auto">Total : {blogs.length}</div>
            
             <main className="container mx-auto grid grid-cols-12 gap-8 mt-6 p-3">
                <div className="md:col-span-8">
                    <Blogs 
                        blogs={blogs}
                        handleReadTime={handleReadTime}
                        toggleBookmark={toggleBookmark}
                        isBookmark={isBookmark}
                    >
                    </Blogs>
                </div>
                <div className="md:col-span-4">
                    <Bookmarks 
                        readTime={readTime}
                        bookmarks={bookmarks}>
                    </Bookmarks>
                </div>
             </main>
             
             <Footer></Footer>
        </div>
    );
}

export default App;
