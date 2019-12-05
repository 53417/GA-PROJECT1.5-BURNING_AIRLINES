import React, { Component } from 'react';

class Login extends Component {
//     constructor(props) {
//         super(props);
//     }

    render() {
        return ( 
            <div>
                <h1>Hello! How are you?</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
            </div>
         )
    }
}          
 
export default Login;