import React from 'react'
import './App.css'

function Filter ({setActiveGenre, activeGenre, setFiltered, popular}) {
    
   
    return (
      <div className="filter-container dark">
        <button className={activeGenre===0 ? 'active' : ''} onClick={() => setActiveGenre(0)}>
          All
        </button>
        <button className={activeGenre===35 ? 'active' : ''} onClick={() => setActiveGenre(35)}>
          Comedy
        </button>
        <button className={activeGenre===28 ? 'active' : ''} onClick={() => setActiveGenre(28)}>
          Action
        </button>
        <button className={activeGenre===12 ? 'active' : ''} onClick={() => setActiveGenre(12)}>
          Adventure
        </button>
        <button className={activeGenre===16 ? 'active' : ''} onClick={() => setActiveGenre(16)}>
          Animation
        </button>
        <button className={activeGenre===14 ? 'active' : ''} onClick={() => setActiveGenre(14)}>
          Fantasy
        </button>
        <button className={activeGenre===10751 ? 'active' : ''} onClick={() => setActiveGenre(10751)}>
          Family
        </button>
      </div>
    );
}
export default Filter  