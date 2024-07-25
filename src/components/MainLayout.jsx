// import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";  


const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
