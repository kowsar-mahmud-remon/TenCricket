import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, removeUserInfo } from "../../services/auth.service";

const Navbar = () => {
  const userLoggedIn = isLoggedIn();
  const navigate = useNavigate();

  const [clientRender, setClientRender] = useState(false);

  useEffect(() => {
    setClientRender(true);
  }, []);

  const logOut = () => {
    removeUserInfo("accessToken");
    navigate('/login');
  };

  const menuItems = (
    <React.Fragment>
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li className="">
        <Link to="/currentMatches">Current Matches</Link>
      </li>
      <li className="">
        <Link to="/nextSeries">Next Series</Link>
      </li>
    </React.Fragment>
  );

  const navbarShadow = {
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div className="w-full bg-secondary sticky top-0 z-10" style={navbarShadow}>
      <div className="max-w-[1280px] mx-auto navbar flex justify-between py-0">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="cursor-pointer normal-case text-xl pl-1 flex items-center"
          >
            <h2 className="text-2xl font-semibold text-white">TenCricket</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal p-0 text-lg">{menuItems}</ul>
        </div>

        <div className="text-white">
          {clientRender && userLoggedIn ? (
            <button
              onClick={logOut}
              className="px-4 py-1 w-24 rounded-lg bg-red-500"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-1 w-24 rounded-lg bg-green-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
