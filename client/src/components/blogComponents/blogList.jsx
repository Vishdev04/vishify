import React, { useState, useEffect } from "react";
import BlogCard from "./blogCards";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/posts", {
      headers: {
        "x-auth-token": localStorage.getItem("vishify-auth-token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          setBlogs("");
        } else {
          console.log(result.posts);
          setBlogs(result.posts);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      {blogs.length === 0 ? (
        <h1>No Post Found</h1>
      ) : (
        blogs.map(({ _id, title, media, content, publishdate }) => {
          return (
            <BlogCard
              key={_id}
              blogTitle={title}
              mediaFile={media}
              blogContent={content}
              blogDate={publishdate}
            />
          );
        })
      )}
    </div>
  );
};

export default BlogList;
