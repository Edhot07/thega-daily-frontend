import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div
      className="
        md:w-[90%] w-screen md:h-[90vh] h-screen md:rounded-xl shadow-lg 
        bg-linear-to-tl from-blue-900 via-cyan-900 to-teal-700
        flex flex-col overflow-hidden
        "
    >
      {/* Navbar */}
      <Navbar />

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar scroll-smooth p-4">
        <Outlet />
      </main>
    </div>
  );
};
