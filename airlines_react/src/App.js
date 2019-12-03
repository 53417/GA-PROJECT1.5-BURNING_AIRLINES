import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/home" component={ Destinations } />
            <Route path="/showFlight/:flightId" component={FlightDetails}/>
            <Route path="/userSearchFlights" component={UserSearchFlights} />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
      
      </React.Fragment>
    );
  }
}

export default App;
