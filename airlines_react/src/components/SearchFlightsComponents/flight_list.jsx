import React from 'react';
import Axios from 'axios';

export default class FlightsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        flightData: [],
        searchQuery: ""
    };
  }

  componentDidMount() {
      Axios.get('http://localhost:3000/burning/flight_read.json')      
              .then(res => {const flights = res.data;
                  this.setState({
                    flightData: flights
                  });
      console.log(this.state.flightData)
      })
  }

  render() {
    const {flightData} = this.state;
    this.flights = flightData.map((item, key) =>
      <li key={item.id}><a href={`/showFlight/${item.id}`}> id: {item.id} | plane_id: {item.plane_id} | fly_to: {item.fly_to} </a></li>
    );
    return(
      <>
      <h3>Search Component</h3>
      <input></input>

      <h3>Flights List Component</h3>
      <ul>
        {this.flights}
      </ul>
      </>
    )
  }

}
