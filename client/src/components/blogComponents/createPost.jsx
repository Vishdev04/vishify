import React, { useState } from "react";
import { toast } from "react-toastify";
import { navigate } from "@reach/router";
import { FormText, FormTextArea, FormFile } from "../common/formInputs";
import "./createPost.scss";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [media, setMedia] = useState("");

  const uploadImage = (media) => {
    const data = new FormData();

    data.append("file", media);
    data.append("upload_preset", "vishify-media");
    data.append("cloud_name", "vishkreatives");

    fetch("https://api.cloudinary.com/v1_1/vishkreatives/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setMedia(data.url))
      .catch((err) => console.log(err));
  };

  const uploadBlog = async () => {
    const responce = await fetch("/api/posts/publish", {
      method: "post",
      headers: {
        "x-auth-token": localStorage.getItem("vishify-auth-token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content: body,
        media,
      }),
    });

    const data = await responce.json();

    if (data.error) {
      toast.error(data.error);
      return;
    }

    navigate('/posts')
  };

  return (
    <div className="container">
      <div className="new-post-form">
        <h1>Create new Post</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            uploadBlog();
          }}
        >
          <FormText
            value="Your Title here"
            label="Title"
            handleChange={(title) => setTitle(title)}
          />
          <FormTextArea
            value="Body of the Post here"
            label="Post"
            handleChange={(body) => setBody(body)}
          />
          <FormFile
            value="Select Photo"
            label="Select Post media"
            handleChange={(media) => uploadImage(media)}
          />

          <div className="form-group button">
            <button type="submit" className="btn">
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
