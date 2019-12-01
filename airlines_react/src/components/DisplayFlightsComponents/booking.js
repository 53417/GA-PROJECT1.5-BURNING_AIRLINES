import React from 'react';

export default class SeatBooking extends React.Component
{
    render() {
        return (
            <div>
                <h1>BOOK FLIGHT</h1>
                <h2>Seat: {this.props.seat}</h2>
                <button onClick={this.props.onBookingClicked}>Book</button>
            </div>
        );
    }
}
