import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="movie"
    >
      <h1 className="">{movie.title}</h1>
      <Link to={`/movies/${movie.title}`}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt=""
          className="movie-image"
        />
      </Link>
    </motion.div>
  );
}

export default Movie;
