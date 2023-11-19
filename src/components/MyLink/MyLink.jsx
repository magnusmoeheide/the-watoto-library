import React from "react";
import { Link, useLocation } from "react-router-dom";

const MyLink = ({ to, ...props }) => {
  const location = useLocation();

  // Check if the current pathname starts with /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Prepend /admin to the path if it's an admin route
  const modifiedPath = isAdminRoute ? `/admin${to}` : to;

  return <Link to={modifiedPath} {...props} />;
};

export default MyLink;
