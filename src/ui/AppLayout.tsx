import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div
      dir="rtl"
      className="grid h-dvh w-dvw grid-cols-[260px_repeat(11,1fr)] grid-rows-12 overflow-hidden"
    >
      <Header />
      <Sidebar />

      <main className="col-start-1 col-end-13 row-start-2 row-end-11 md:col-start-2 md:row-end-12 overflow-x-hidden overflow-y-scroll">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
