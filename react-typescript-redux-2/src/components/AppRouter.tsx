import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter: React.FC = () => {
  const auth = useSelector(state=>state.);
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
