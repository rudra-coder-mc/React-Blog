import { Container, Card } from "../components";
import { useSelector } from "react-redux";

const AllPost = () => {
  const posts = useSelector((state) => state.Blog.Bolgs);

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
