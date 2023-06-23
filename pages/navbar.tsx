import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src="homepage/New.png" alt="" />
        LuxeStayResort-project
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Halaman Utama <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tentang/about.html">
              Tentang
            </a>
          </li>
          <li className="nav-log">
            <a className="nav-link" href="login.html">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
