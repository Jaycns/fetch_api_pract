import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();
export const ContextProvider = (props) => {
  const [activeGenre, setActiveGenre] = useState(0);
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    async function fetchPopular() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=b8ecb70867e157d08b6ae38c4763ddc5&language=en-US&page=1"
      );
      const movies = await data.json();
      setPopular(movies.results);
      setFiltered(movies.results);
    }
    fetchPopular();
  }, []);
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre]);

  const [isClick, setIsClick] = useState(false);
  function handleClick() {
    setIsClick(!isClick);
    !isClick
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }
  //   const [number, setNumber] = useState("");
  const [searchMovies, setSearchMovies] = useState("");
  const [searchList, setSearchList] = useState([]);

  //   function addComa(e) {
  //     let val = e.target.value.replace(/,/g, "");
  //     if (!isNaN(Number(val))) {
  //       let newVal = val.split(/(?=(?:\d{3})+$)/).join(",");
  //       setNumber(newVal);
  //     } else {
  //       setNumber("");
  //     }
  //   }
  function handleChange(e) {
    setSearchMovies(e.target.value);
    if (e.target.value.length > 2) {
      setSearchList(
        popular.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
    else {
      setSearchList([]);
    }
  }
  function handleSearchClose() {
    setSearchList([]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSearchMovies("");
  }
  const stateActions = {
    handleClick,
    setActiveGenre,
    setFiltered,
    handleChange,
    handleSubmit,
    handleSearchClose,
  };
  const States = {
    filtered,
    isClick,
    popular,
    activeGenre,
    searchMovies,
    searchList,
  };
  return (
    <AppContext.Provider value={{ ...States, ...stateActions }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
