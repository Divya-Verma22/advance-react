import React, { useEffect, useState } from 'react';
import Spinner from '../project-6/Spinner';
import Card from './Card';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  async function fetchApi() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } catch (e) {
      console.error("Error fetching products:", e);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="min-h-screen p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen text-lg font-semibold">
          No data found
        </div>
      )}
    </div>
  );
};

export default Home;
