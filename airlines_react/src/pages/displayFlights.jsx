import React from 'react';
import Seating from '../components/DisplayFlightsComponents/seating';
import SeatBooking from '../components/DisplayFlightsComponents/booking';

export default class FlightDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeat:'0-0'
        };
    }
    onSeatSelected(seatId) {
        this.setState({
            selectedSeat: seatId
        });
    }
    render() {
        return (
            <div>
                Flight Details <br />
                FlightId: {this.props.flightId}  <br />
                SelectedSeat: {this.state.selectedSeat}
                <br />
                <Seating 
                    rows={40} 
                    cols={4} 
                    selectedSeat={this.state.selectedSeat}
                    onSeatSelected={(seatId) => this.onSeatSelected(seatId)}>
                </Seating>
                <SeatBooking seat={this.state.selectedSeat} onBookingClicked={() => {} }></SeatBooking>
            </div>
        );
    }
}