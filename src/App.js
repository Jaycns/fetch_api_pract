import React, { useContext } from "react";
import "./App.css";
import Movie from "./movie.js";
import Filter from "./filter.jsx";
import Footer from "./footer.js";

import { motion, AnimatePresence } from "framer-motion";
import AppContext from "./context/context";

function App() {
  const {
    isClick,
    popular,
    setActiveGenre,
    activeGenre,
    setFiltered,
    filtered,
  } = useContext(AppContext);

  return (
    <>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
      {/* b8ecb70867e157d08b6ae38c4763ddc5 */}
      <Footer isClick={isClick} />
    </>
  );
}

export default App;
