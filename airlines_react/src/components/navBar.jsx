import React from "react";
import { Link } from "@reach/router";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src='https://cdn4.iconfinder.com/data/icons/air-crashes/512/xxx044-512.png' alt="BurningAirlines" height="36" width="36"></img>
      <Link to="home">
        Burning Airlines
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/destinations">
            Destinations
          </Link>
          <Link className="nav-item nav-link" to="/displayFlights">
            Display Flights
          </Link>
          <Link className="nav-item nav-link" to="/userSearchFlights">
            Search Flights
          </Link>
          {!user && (
            <React.Fragment>
              <Link className="nav-item nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-item nav-link" to="/register">
                Register
              </Link>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <Link className="nav-item nav-link" to="/profile">
                {user.name}
              </Link>
              <Link className="nav-item nav-link" to="/logout">
                Logout
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
