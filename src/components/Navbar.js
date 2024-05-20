import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./css-styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" activeClassName="active" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/works" activeClassName="active">
              Works
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          {location.pathname !== "/" && (
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
