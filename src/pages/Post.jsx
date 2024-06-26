import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import blogServices from "../Appwrite/Blog";
import fileServices from "../Appwrite/File";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.Auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      blogServices.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    blogServices.deletePost(post.$id).then((status) => {
      if (status) {
        fileServices.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <Container className="py-2 dark:bg-gray-900">
      <div className="w-full flex justify-center relative mb-6  rounded-xl ">
        <img
          src={fileServices.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-xl"
        />

        {isAuthor && (
          <div className="absolute right-6 top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500" className="mr-3">
                Edit
              </Button>
            </Link>
            <Button bgColor="bg-red-500" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>
      <div className="w-full mb-6 ">
        <h1 className="text-2xl font-bold text-center">{post.title}</h1>
      </div>
      <div className="browser-css">{parse(post.content)}</div>
    </Container>
  ) : null;
}
