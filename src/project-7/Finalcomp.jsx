import Header from "./Header"
import Blog from "./Blog"
import Page from "./page"
import { useContext, useEffect } from "react"
import { AppContext } from "./ContextApp/AppContext"
import { Routes } from "react-router-dom"

const Finalcomp = () => {
    const { fetchblogPost } = useContext(AppContext);

    useEffect(()=>{
      fetchblogPost();
    },[]);


  return (
     <div className="item-center">
      <Header/>
      <Blog/>
      <Footer/>

     </div>
  )
}

export default Finalcomp