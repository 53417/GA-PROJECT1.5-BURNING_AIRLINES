import React from 'react';

export default class FlightsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            query: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/burning/flight_read")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                query: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ).then(console.log(this.state));
      }

    render() {
        const { error, isLoaded, query } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <p>{query}</p>
          );
        }
      }
    }