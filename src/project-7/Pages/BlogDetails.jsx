import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  console.log(post);

  return (
    <div className=" pb-16 p-8  ">
      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>

      <p>
        by <span>{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>

      <p>Posted on {post.date}</p>
      <p>{post.content}</p>

      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tag/${tag.replaceAll(" ", "-")}`}>
            <span>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
