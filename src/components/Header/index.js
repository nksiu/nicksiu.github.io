import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to={"/"} className="navbar-brand">Nick Siu</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" active={true}>
            <Link to={"/"} className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to={"/experience"} className="nav-link">Experience</Link>
          </li>
          <li className="nav-item">
            <Link to={"/projects"} className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header