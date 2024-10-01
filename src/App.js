import { useEffect, useState ,React } from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from "./container/HomePage/HomePage";
import Preloader from './container/Preloader/preloader';
import BlogPage from "./container/BlogPage/BlogPage";
import CreateBlogPage from './container/BlogPage/create_blog';
import BlogDetailPage from './container/BlogPage/BlogDetail';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
       
      <Preloader loading={loading} />
      {!loading && (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            {/* <Route path="/create-blog" element={<CreateBlogPage />} /> */}
      </Routes>
        )}
    </div>
  );
};





export default App;
