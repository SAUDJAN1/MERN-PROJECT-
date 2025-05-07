import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul className="bg-blue-300 md:bg-blue-400 flex justify-around p-2 rounded-2xl capitalize font-mono text-2xl">
        <Link
          to="/"
          className="m-1 bg-blue-600 px-5 py-3 rounded-2xl cursor-pointer hover:duration-150 hover:bg-blue-800 hover:text-green-300"
        >
          home
        </Link>

        <Link
          to="/login"
          className="m-1 bg-blue-600 px-5 py-3 rounded-2xl cursor-pointer hover:duration-150 hover:bg-blue-800 hover:text-green-300"
        >
          login
        </Link>
        <Link
          to="/register"
          className="m-1 bg-blue-600 px-5 py-3 rounded-2xl cursor-pointer hover:duration-150 hover:bg-blue-800 hover:text-green-300"
        >
          register
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
