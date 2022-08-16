import React, { useContext } from "react";
import "./App.css";
import AppContext from "./context/context";

function Input() {
  const { handleChange, searchMovies, handleSubmit, searchList, isClick } =
    useContext(AppContext);
  return (
    <div className="input-box">
      <form className="inbox" onSubmit={handleSubmit}>
        <input
          className={`form-input ${isClick ? "dark" : ""}`}
          type="text"
          onChange={handleChange}
          value={searchMovies}
          placeholder="Movies"
        ></input>{" "}
        <div className={`search-list ${isClick ? "dark" : ""}`}>
          {searchList.map((movie, index) => {
            return (
              <div key={movie.title} className="search-item">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  alt=""
                  className="search-image"
                />
                {searchMovies > 2 && searchList === [] ? (
                  <p>No results found!!</p>
                ) : (
                  <p>{movie.title}</p>
                )}
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default Input;
