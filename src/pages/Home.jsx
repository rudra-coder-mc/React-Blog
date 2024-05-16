import { Container, Card } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const posts = useSelector((state) => state.Blog.Bolgs);
  // console.log(posts);

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
