import React from "react";

import "./blogCards.scss";

const BlogCard = ({ blogTitle, mediaFile, blogContent, blogDate }) => {
  return (
    <div className="card mb-4">
      <div className="row no-gutters card-holder">
        <div className="col-md-6 col-sm-12 img-holder">
          <img src={mediaFile[0]} className="card-img" alt="..." />
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card-body">
            <h2 className="card-title">{blogTitle}</h2>
            <p className="card-text">{blogContent}</p>
            <p className="card-text post-time">
              <small className="text-muted">{blogDate}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
