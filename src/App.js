import React, { useState, useEffect } from "react";
import './App.css'
import Movie from './movie.js'
import Filter from './filter.jsx'
import Input from "./input.js"
import Switch from "./switch.js"
import { motion, AnimatePresence } from "framer-motion"

function App () {
  useEffect(() => {
    fetchPopular()
  }
   ,[]
  )
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [isClick, setIsClick] = useState(false);
  function handleClick() {
    setIsClick(!isClick);
  }
  async function fetchPopular  ()  {
 const data= await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b8ecb70867e157d08b6ae38c4763ddc5&language=en-US&page=1')
    const movies = await data.json()
    setPopular(movies.results);
    setFiltered(movies.results);
  
  
  }
  return (
    <div className={`container ${isClick?"dark": ''}`}>
      <div className="box">
        
        <div className="holder">
      <Switch handleClick={handleClick} isClick={isClick}/>
          <Input isClick={isClick} />
        </div>
      <Filter popular={ popular } setFiltered={ setFiltered } activeGenre={ activeGenre } setActiveGenre={ setActiveGenre }/>
      <motion.div layout className="popular-movies">
        <AnimatePresence>
        { filtered.map((movie) => {
          return <Movie key={ movie.id } movie={ movie}/>  
        }) }
          </AnimatePresence>
      </motion.div>
        {/* b8ecb70867e157d08b6ae38c4763ddc5 */ }
        </div>
    </div>
  );
}

export default App;
