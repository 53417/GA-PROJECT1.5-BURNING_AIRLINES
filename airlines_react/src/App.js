import React, { Component } from "react";
import { Router, Link } from "@reach/router"
import NavBar from "./components/navBar";
import Destinations from './components/destinations';
import Login from "./components/loginForm";
import Registration from "./components/registerForm";
import Logout from "./components/logout";
//import auth from "./services/authService";
import 'font-awesome/css/font-awesome.css';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import FlightDetails from "./pages/displayFlights";
import UserSearchFlights from "./components/UserSearchFlights";


class App extends Component { 
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }
  // componentDidMount() {
  //    const user = auth.getCurrentUser();
  //    this.setState({ user });
  // }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="container">
          <Router>
            <Registration path="/register"/>
            <Login path={"/login"} 
              render={props => (
                <Login {...props} loggedInStatus={this.state.loggedInStatus}/>
              )} 
            />
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
