import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { Home, Article, Articles, GetInTouch, Donate, About, Kibera, Founder, Store, TermsOfSale } from './container';

import { WhatWeDo, Wwd } from './container';
import { Fullscreen } from './components';


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
          <Route path="/programs" element={<WhatWeDo />} />
          <Route path="/programs/:wwdUrl" element={<Wwd />} />
          <Route path="/getintouch" element={<GetInTouch />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/kibera" element={<Kibera />} />
          <Route path="/about/founder" element={<Founder />} />

          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/store" element={<Store />} />
          <Route path="/donate/termsofsale" element={<TermsOfSale />} />
        </Routes>
    </div>
  );
}

export default App;
