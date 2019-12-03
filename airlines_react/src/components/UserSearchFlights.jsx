import React, { Component } from 'react';
import FlightsList from "./SearchFlightsComponents/flight_list.jsx";

class UserSearchFlights extends Component {

    render() {
        return(
            <>
            <h1>Search Flights Page</h1>
            <FlightsList></FlightsList>
            </>
        )
    }
}
 
export default UserSearchFlights;