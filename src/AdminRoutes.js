import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { sharedRoutes } from './SharedRoutes';
import { Home } from './container';


function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home isAdmin={true} />} />
        {sharedRoutes.map(route => (
          <Route 
          key={route.path} 
          path={route.path === '/' ? '' : route.path.substring(1)}
          element={React.createElement(route.component, { isAdmin: true })}
        />
        ))}
    </Routes>
  );
}

export default AdminRoutes;
