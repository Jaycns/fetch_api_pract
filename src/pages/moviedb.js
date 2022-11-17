import React, { useContext } from "react";
import AppContext from "../context/context";
import { useParams } from "react-router-dom";
const MovieDb = () => {
  const { popular } = useContext(AppContext);
  const params = useParams();
  const data = Array.from(popular);
  const movieData = data.filter((movie) => params.id === movie.title);
  console.log({ params: movieData });
  return (
    <div>
      {movieData.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
    </div>
  );
};

export default MovieDb;
