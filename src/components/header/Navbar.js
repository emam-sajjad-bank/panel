import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="flex">
        <li>
          <Link to="/" className="nav-link p-1">
            <span className="md:inline-block hidden">صفحه نخست</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link p-1">
            <span className="md:inline-block hidden">پروفایل کاربری</span>
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li>
          <Link to="/" className="nav-link p-1">
            <span className="md:inline-block hidden">خروج</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
