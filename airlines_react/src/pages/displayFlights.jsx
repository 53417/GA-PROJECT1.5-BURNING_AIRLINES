import React from 'react';
import Seating from '../components/DisplayFlightsComponents/seating';
import SeatBooking from '../components/DisplayFlightsComponents/booking';
import Axios from 'axios';

export default class FlightDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeat:'0-0',
            planeData: [],
            flightId: 0
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/burning/plane_read.json')      
                .then(res => {const planes = res.data;
                    this.setState({ planeData: planes});
        })
    }

    onSeatSelected(seatId) {
        this.setState({
            selectedSeat: seatId
        });
    }
    onBookingClicked(book){
        Axios.post('/burning/seating_update', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {
        return (
            <div>
                Flight Details <br />
                Flight Id: {this.props.flightId}  <br />
                Selected Seat: {this.state.selectedSeat}
                <br />
                <Seating 
                    rows={this.state.planeData.length ? this.state.planeData[this.state.flightId].rows : 0} 
                    cols={this.state.planeData.length ? this.state.planeData[this.state.flightId].cols : 0} 
                    selectedSeat={this.state.selectedSeat}
                    onSeatSelected={(seatId) => this.onSeatSelected(seatId)} planeData={this.state.planeData}>
                </Seating>
                <SeatBooking seat={this.state.selectedSeat} onBookingClicked={() => {this.onBookingClicked()} }></SeatBooking>
            </div>
        );
    }
}