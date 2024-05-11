import React, { useState, useEffect } from "react";
import blogServices from "../Appwrite/Blog";
import { Container, Card } from "../components";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    blogServices.getPosts([]).then((posts) => {
      if (posts) {
        // console.log("log from AllPost.jsx ::", posts);
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full my-1">
      <Container className="h-dvh">
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Card {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
