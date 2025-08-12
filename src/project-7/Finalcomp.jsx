
import { useContext, useEffect } from "react"
import { AppContext } from "./ContextApp/AppContext"
import { Routes , Route, useSearchParams, useLocation } from "react-router-dom"
import Blogpost from "./Pages/Blogpost"
import Categories from "./Pages/Categories"
import Home from "./Pages/Home"
import Tagpage from "./Pages/Tagpage"

const Finalcomp = () => {
    const { fetchblogPost } = useContext(AppContext);
    const [searchParams , setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(()=>{
      const page = searchParams.get("page") ?? 1;
      if(location.pathname.includes("tag")){
        const tag = location.pathname.split("/").at(-1).replaceAll("-" , " ");
        fetchblogPost(Number(page) , tag )
      }
      if(location.pathname.includes("categories")){
        const categories = location.pathname.split("/").at(-1).replaceAll("-" , " ");
        fetchblogPost(Number(page) ,  null , categories)
      }
      else{
        fetchblogPost(Number(page));
      }
    },[location.pathname , location.search]);


  return (
     <Routes>
      <Route path = "/" element = {<Home/>}/> 
      <Route path = "/blog/:blogId" element = {<Blogpost/>}/> 
      <Route path = "/categories/:category" element = {<Categories/>}/> 
      <Route path = "/tag/:tag" element = {<Tagpage/>}/> 
      </Routes>
  )
}

export default Finalcomp