import React, { Component } from "react";
import { Router, Link } from "@reach/router"
import NavBar from "./components/navBar";
import Destinations from './components/destinations';
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import 'font-awesome/css/font-awesome.css';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import FlightDetails from "./pages/displayFlights";
import UserSearchFlights from "./components/UserSearchFlights";


class App extends Component { 
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="container">
          <Router>
            <RegisterForm path="/register"/>
            <LoginForm path="/login"/>
            <Logout path="/logout"/>
            <Destinations path="/home" />
            <FlightDetails path="/showFlight/:flightId"/>
            <UserSearchFlights path="/userSearchFlights"/>
          </Router>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
