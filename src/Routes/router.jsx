import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import {
  Home,
  Login,
  Signup,
  AddPost,
  AllPost,
  EditePost,
  Post,
} from "../pages";
import Protected from "./Protected";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <Protected authentication={false}>
            <Login />
          </Protected>
        }
      />
      <Route
        path="/signup"
        element={
          <Protected authentication={false}>
            <Signup />
          </Protected>
        }
      />
      <Route
        path="/all-posts"
        element={
          <Protected authentication>
            <AllPost />
          </Protected>
        }
      />
      <Route
        path="/add-post"
        element={
          <Protected authentication>
            <AddPost />
          </Protected>
        }
      />
      <Route
        path="/edit-post/:slug"
        element={
          <Protected authentication>
            <EditePost />
          </Protected>
        }
      />
      <Route path="/post/:slug" element={<Post />} />
    </Route>
  )
);

export default router;
