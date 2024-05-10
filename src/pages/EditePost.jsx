import React, { useState, useEffect } from "react";
import { PostForm } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import blogServices from "../Appwrite/Blog";

const EditePost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPosts] = useState(null);

  useEffect(() => {
    if (slug) {
      blogServices.getPost(slug).then((post) => {
        setPosts(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return (
    <div className="py-4">
      <PostForm post={post} />
    </div>
  );
};

export default EditePost;
