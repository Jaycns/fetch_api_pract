import App from "../App";
import MovieDb from "../pages/moviedb.js";
import { Routes, useLocation, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout";

const RouteMap = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/:id",
    element: <MovieDb />,
  },
];

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Layout>
        <Routes location={location} key={location.pathname}>
          {RouteMap.map((items, index) => (
            <Route path={items.path} element={items.element} key={index} />
          ))}
        </Routes>
      </Layout>
    </AnimatePresence>
  );
};
export default Pages;
