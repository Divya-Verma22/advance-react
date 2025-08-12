import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  async function fetchblogPost(page = 1, tag = null, category = null) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPages(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
    } catch (e) {
      console.error("Error fetching posts:", e);
      setPages(1);
      setPosts([]);
      setTotalPage(null);
    }

    setLoading(false);
  }

  const handlePageChange = (page) => {
     navigate({ search : `?page=${page}`});
    setPages(page);

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
    tag,
    setTag,
    category,
    setCategory,
    handlePageChange,
    fetchblogPost,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
