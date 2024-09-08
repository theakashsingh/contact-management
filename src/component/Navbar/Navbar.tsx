import React from "react";
import { NavLink } from "react-router-dom";

// Define the types for the Navbar props

const Navbar: React.FC = () => {
  return (
    <nav className="flex max-w-80">
      {/* <h1 className="text-2xl font-bold">Contact Management App</h1> */}
      <ul className="flex flex-col py-4 items-center space-x-4 border-red-100 border">
        <li>
          <NavLink to="" className="text-blue-500 hover:text-blue-700">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/charts-and-maps"
            className="text-blue-500 hover:text-blue-700"
          >
            Charts and Maps
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
