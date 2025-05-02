import React from "react";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <header>My Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
