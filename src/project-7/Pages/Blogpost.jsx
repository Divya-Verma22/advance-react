import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../ContextApp/AppContext';
// import { baseUrl } from '../baseUrl';
import Spinner from '../Spinner';
import Header from '../Header'; // Ensure this path is correct
import BlogDetails from './BlogDetails'; // Ensure this path is correct




const Blogpost = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const { setLoading, loading } = useContext(AppContext);
    const [blog, setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);

    const location = useLocation();
    const navigation = useNavigate();

    const blogId = location.pathname.split("/").at(-1);



    async function fetchRelatedBlogs() {
        setLoading(true);
        const url = `${newBaseUrl}get-blogs?blogId=${blogId}`;
        // const url = "https://codehelp-apis.vercel.app/api/get-blogs?blogId=BLOG500"
        console.log(url);

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlog(data.relatedBlog);
        } catch (e) {
            console.error("Error fetching blog data:", e);
            setBlog(null);
            setRelatedBlog([]); 
        }

        setLoading(false);
    }
    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }

    }, [location.pathname]);

    return (
        <div>
            <Header />

            <div>
                <button onClick={() => navigation(-1)}>Back</button>
            </div>

            {loading ? (
                <div>
                    <p>Loading...</p>
                    <Spinner />
                </div>
            ) : blog ? (
                <div>
                    <BlogDetails post={blog} />
                    <h2>Related Blogs</h2>
                    {relatedBlog.map((post) => (
                        <div key={post.id}>
                            <BlogDetails post={post} />
                        </div>
                    ))}

                </div>
            ) : (
                <div>
                    <p>No Blog Found</p>
                </div>
            )}
        </div>
    );
};

export default Blogpost;
