import React, { useContext } from 'react';
import { AppContext } from './ContextApp/AppContext';
import Spinner from './Spinner';

const Blog = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="relative min-h-screen max-w-3xl mx-auto px-4 justify-center items-center mb-3 mt-3">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white bg-opacity-75">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <p>No blog found</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mb-6 p-4 border rounded">
            <h2 className="font-semibold text-xl">{post.title}</h2>
            <p className='text-red-400'>
              By <span className='text-red-600 underline font-semibold'>{post.author}</span> on <span className='font-semibold underline'>{post.category}</span>
            </p>
            <p className='text-green-500'>Posted on {post.date}</p>
            <p className='font-serif'>{post.content}</p>
            <div className="mt-2 text-blue-600 font-semibold">
              {post.tags.map((tag, index) => (
                <span key={index} className="mr-2 underline">#{tag}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
