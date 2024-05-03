import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";

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
    </Route>
  )
);

export default router;
