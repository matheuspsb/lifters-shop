import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

const PageLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="page-layout">
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export { PageLayout };
