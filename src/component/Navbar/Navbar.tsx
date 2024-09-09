import React from "react";
import { NavLink } from "react-router-dom";

// Define the types for the Navbar props

const Navbar: React.FC = () => {
  return (
    <nav className="flex md:flex-col items-center gap-5 h-max md:h-screen w-full md:w-[25%] py-8 sticky top-0 bg-blue-500 z-10 md:bg-white">
      <h1 className="md:block hidden text-2xl text-center font-bold mb-6"> Contact Management </h1>
      <ul className="flex justify-around md:flex-col gap-4 px-6 w-full text-xl font-semibold">
        <li>
          <NavLink to="" className="md:text-blue-500 md:hover:text-blue-700 underline">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/charts-and-maps"
            className="md:text-blue-500 md:hover:text-blue-700 underline"
          >
            Charts and Maps
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
