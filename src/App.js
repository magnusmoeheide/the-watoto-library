import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { Home, Articles, GetInTouch, Donate, About, Kibera, Founder, Partners, Store } from './container';

import { Article1, Article3, Article4, Article5, Article6, Article7, Article8, Article9, Article10 } from './container';

import { WhatWeDo, ComputerClass, ChessClub, StudyGroup, DanceGroup, Klwf } from './container';
import { Fullscreen } from './components';
import Slideshow from './components';


function App() {
  Fullscreen();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // This will set the scroll position to the top
  }, [location.pathname]); 

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/getintouch" element={<GetInTouch />} />
          {/* <Route path="/getintouch/partners" element={<Partners />} /> */}

          <Route path="/about" element={<About />} />
          <Route path="/about/kibera" element={<Kibera />} />
          <Route path="/about/founder" element={<Founder />} />

          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/store" element={<Store />} />

          <Route path="/whatwedo/1" element={<ComputerClass />} />   
          <Route path="/whatwedo/2" element={<ChessClub/>} />   
          <Route path="/whatwedo/3" element={<StudyGroup/>} />   
          <Route path="/whatwedo/4" element={<DanceGroup/>} />   
          <Route path="/whatwedo/5" element={<Klwf/>} />   

          <Route path="/Articles/1" element={<Article1 />} />
          <Route path="/Articles/3" element={<Article3 />} />
          <Route path="/Articles/4" element={<Article4 />} />
          <Route path="/Articles/5" element={<Article5 />} />
          <Route path="/Articles/6" element={<Article6 />} />
          <Route path="/Articles/7" element={<Article7 />} />
          <Route path="/Articles/8" element={<Article8 />} />
          <Route path="/Articles/9" element={<Article9 />} />
          <Route path="/Articles/10" element={<Article10 />} />
        </Routes>
    </div>
  );
}

export default App;
