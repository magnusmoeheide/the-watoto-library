import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { sharedRoutes } from './SharedRoutes';
import AdminRoutes from './AdminRoutes'; 
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
          {sharedRoutes.map(route => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={React.createElement(route.component, { isAdmin: route.isAdmin })} 
            />
          ))}   
           <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
    </div>
  );
}

export default App;
