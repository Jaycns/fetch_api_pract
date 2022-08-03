import React, { useContext } from "react";
import "./App.css";
import Movie from "./movie.js";
import Filter from "./filter.jsx";
import Switch from "./switch.js";
import Footer from "./footer.js";
import Scroll from "./scroll.js";
import image from "./img/jaycn-logo-black.png";
import imag from "./img/jaycn-logo-white.png";
import { motion, AnimatePresence } from "framer-motion";
import AppContext from "./context/context";

function App() {
  const {
    isClick,
    handleClick,
    popular,
    setActiveGenre,
    activeGenre,
    setFiltered,
    filtered,
    handleSearchClose,
  } = useContext(AppContext);

  return (
    <div
      className={`container ${isClick ? "dark" : ""}`}
      onClick={handleSearchClose}
    >
      <div className="image-box">
        <img className="image" src={isClick ? image : imag} alt="Jaycn Logo" />
      </div>
      <Scroll />
      <div id="home" className="box">
        <div className="holder">
          <Switch handleClick={handleClick} isClick={isClick} />
        </div>
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
      </div>
    </div>
  );
}

export default App;
