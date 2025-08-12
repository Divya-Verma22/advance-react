import React, { useContext } from 'react';
import { AppContext } from './ContextApp/AppContext';
import Spinner from './Spinner';
import BlogDetails from './Pages/BlogDetails';

const Blog = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white bg-opacity-75">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <p>No blog found</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>  {/* Added key here */}
            <BlogDetails post={post} />
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;

