import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { Home, Article, Articles, GetInTouch, Donate, About, Kibera, Founder, Partners, Store, TermsOfSale } from './container';

import { WhatWeDo, ComputerClass, ChessClub, StudyGroup, DanceGroup, Klwf } from './container';
import { Fullscreen } from './components';
import Slideshow from './components';


function App() {
  Fullscreen();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]); 

  return (
    <div className="App">
        <Routes basename="/the-watoto-library">
          <Route path="/" element={<Home />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/getintouch" element={<GetInTouch />} />
          {/* <Route path="/getintouch/partners" element={<Partners />} /> */}

          <Route path="/about" element={<About />} />
          <Route path="/about/kibera" element={<Kibera />} />
          <Route path="/about/founder" element={<Founder />} />

          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/store" element={<Store />} />
          <Route path="/donate/termsofsale" element={<TermsOfSale />} />

          <Route path="/whatwedo/1" element={<ComputerClass />} />   
          <Route path="/whatwedo/2" element={<ChessClub/>} />   
          <Route path="/whatwedo/3" element={<StudyGroup/>} />   
          <Route path="/whatwedo/4" element={<DanceGroup/>} />   
          <Route path="/whatwedo/5" element={<Klwf/>} />   

        </Routes>
    </div>
  );
}

export default App;
