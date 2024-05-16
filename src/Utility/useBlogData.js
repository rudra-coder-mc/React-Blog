import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import blogServices from "../Appwrite/Blog";
import { setBlog } from "../frachers/Blog/BlogSlice";

const useBlogData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    blogServices.getPosts().then((posts) => {
      if (posts) {
        // console.log("log from Home.jsx ::", posts);
        dispatch(setBlog(posts.documents));
      }
    });
  }, []);
  return "";
};

export default useBlogData;
