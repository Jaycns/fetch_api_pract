import React, { useState, useEffect } from "react";
import './App.css'
import Movie from './movie.js'
import Filter from './filter.jsx'
import Input from "./input.js"
import Switch from "./switch.js"
import Footer from "./footer.js"
import Scroll from './scroll.js'
import image from './img/jaycn-logo-black.png'
import imag from './img/jaycn-logo-white.png'
import { motion, AnimatePresence } from "framer-motion"

function App () {
  const [activeGenre, setActiveGenre] = useState(0);
   const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
     async function fetchPopular  ()  {
 const data= await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b8ecb70867e157d08b6ae38c4763ddc5&language=en-US&page=1')
    const movies = await data.json()
    setPopular(movies.results);
    setFiltered(movies.results);
  
  }
    fetchPopular()
    
        if (activeGenre === 0) {
            setFiltered(popular)
            return;
        }
        const filtered = popular.filter((movie) =>
            movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
   }, [activeGenre])
 
  const [isClick, setIsClick] = useState(false);
  function handleClick() {
    setIsClick(!isClick);
  }
 
  return (
    <div className={ `container ${isClick ? "dark" : ''}` }>
      <div className="image-box"><img className="image" src={isClick ? image: imag} alt= "Jaycn Logo"/></div>
      <Scroll/>
      <div id= 'home' className="box">
        
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
        <Footer isClick={isClick}/>
        </div>
    </div>
  );
}

export default App;
