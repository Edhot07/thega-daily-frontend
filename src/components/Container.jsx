import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

export const Navbar = () => {
  const [selectServices, setServices] = useState(null);
  const services = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <>
      <nav className="h-12 shrink-0 w-full flex justify-between rounded-t-xl items-center  p-6 md:p-12 text-white">
        <div className="px-4 ml-6 py-1 sm:px-3 sm:py-1 flex justify-center items-center">
          <img
            className=" h-10 w-10 rounded-full"
            src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Handshake-business-logo-by-DEEMKA-STUDIO-3.jpg"
            alt="logo"
          />
        </div>
        <div className="flex justify-between p-4 w-80 m-4">
          <a className="font-semibold sm:text-lg" href="#home">
            Home
          </a>
          {/* <NavLink>About</NavLink> */}
          <a className="font-semibold sm:text-lg" href="#about">
            About
          </a>
          <div className="card flex justify-content-center items-center h-full">
            value={selectServices}
            onChange={(e) => setServices(e.value)}
            options={services}
            optionLabel="name" placeholder="Services" defaultValue={"Services"}
            className="bg-transparent font-semibold sm:text-lg" pt=
            {{
              input: { className: "text-white" },
              panel: { className: "bg-gray-800 text-white rounded" },
              item: { className: "text-white hover:bg-gray-700 m-2 b-2" },
              trigger: {
                className: " mt-1 ml-1 text-white",
              },
            }}
          </div>
          <a className="font-semibold sm:text-lg" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};
