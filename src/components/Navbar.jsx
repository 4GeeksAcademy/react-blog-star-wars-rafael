import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark px-3">
    <Link className="navbar-brand text-warning fw-bold" to="/">
      StarWars Blog
    </Link>
    <div>
      <Link className="btn btn-outline-warning me-2" to="/planets">
        Planets
      </Link>
      <Link className="btn btn-outline-warning me-2" to="/vehicles">
        Vehicles
      </Link>
      <button className="btn btn-warning">Favorites (0)</button>
    </div>
  </nav>
);

export default Navbar;
