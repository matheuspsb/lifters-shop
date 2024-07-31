import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import useCartVisibility from "../../hooks/useCartVisible";

const PageLayout = () => {
  const cartVisibility = useCartVisibility();

  return (
    <React.Fragment>
      <Navbar {...cartVisibility} />
      <main className="page-layout">
        <Outlet context={cartVisibility} />
      </main>
    </React.Fragment>
  );
};

export { PageLayout };
