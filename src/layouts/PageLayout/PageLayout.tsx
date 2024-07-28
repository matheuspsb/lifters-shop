import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

const PageLayout = () => {
  return (
    <main className="ly-private-layout__container--routes">
      <Navbar totalItems={3} />
      <Outlet />
    </main>
  );
};

export { PageLayout };
