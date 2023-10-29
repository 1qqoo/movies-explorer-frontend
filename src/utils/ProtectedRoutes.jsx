import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = (props) => {
  return props.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to="/"
      replace
    />
  );
};

export default ProtectedRoutes;
