import React from 'react';
import Seating from '../components/DisplayFlightsComponents/seating';
import SeatBooking from '../components/DisplayFlightsComponents/booking';
import Axios from 'axios';

export default class FlightDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeat:'0-0',
            planeData: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/burning/plane_read.json')      
                .then(res => {const planes = res.data;
                    this.setState({ planeData: planes });
        console.log(this.state.planeData)
        })
    }

    onSeatSelected(seatId) {
        this.setState({
            selectedSeat: seatId
        });
    }
    onBookingClicked(book){
        console.log('hello')
    }
    render() {
        return (
            <div>
                Flight Details <br />
                Flight Id: {this.props.flightId}  <br />
                Selected Seat: {this.state.selectedSeat}
                <br />
                <Seating 
                    rows={10} 
                    cols={4} 
                    selectedSeat={this.state.selectedSeat}
                    onSeatSelected={(seatId) => this.onSeatSelected(seatId)}>
                </Seating>
                <SeatBooking seat={this.state.selectedSeat} onBookingClicked={() => {this.onBookingClicked()} }></SeatBooking>
            </div>
        );
    }
}