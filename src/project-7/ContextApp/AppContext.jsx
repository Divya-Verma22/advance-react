
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  async function fetchblogPost(page = 1, tag= null , category) {
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;
    if(tag){
      url += `&tag=${tag}`
    }
    if(category){
      url += `&category=${category}`
    }

    try {
        const result = await fetch(url);
      const data = await result.json();
       // Debugging
       console.log(data)
      setPages(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages); // double check key name
    } catch (e) {
      console.error("Error fetching posts:", e);
      setPages(1);
      setPosts([]);
      setTotalPage(null); // ✅ fixed
    }

    setLoading(false);
  }

  function Handlepagechange(page) {
    setPages(page);
    fetchblogPost(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    pages,
    setPages,
    totalPage,
    setTotalPage,
    Handlepagechange,
    fetchblogPost
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
