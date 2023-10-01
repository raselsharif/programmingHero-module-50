import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-slate-500 text-white py-5 mb-4">
      <ul className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Resister</Link>
      </ul>
    </div>
  );
};

export default Navbar;
