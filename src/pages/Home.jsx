import React, { useEffect, useState } from "react";
import blogServices from "../Appwrite/Blog";
import { Container, Card } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    blogServices.getPosts().then((posts) => {
      if (posts) {
        // console.log("log from Home.jsx ::", posts);
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full   my-1 text-center">
        <Container className="h-dvh">
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full  my-1">
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
}

export default Home;
