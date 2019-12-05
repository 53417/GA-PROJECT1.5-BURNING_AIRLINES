import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
        registrationErrors: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
handleChange(event) {
   this.setState({
       [event.target.name]: event.target.value
   })
}

handleSubmit(event) {
    const {
        username,
        email,
        password,
        password_confirmation
    } = this.state;

    axios.post("http://localhost:3000/registrations", {
        user: {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
    }, 
    { withCredentials: true }
    )
    .then(response => {
        console.log("registration res", response);
    })
    .catch(error => {
        console.log("resgitration error", error);
    });

    event.preventDefault();
}
render() { 
    return ( 
        <div className="container">
            <h4>Registration</h4>
            <br />
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row"> 
                    <label 
                        for="userName" 
                        class="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input 
                            type="username" 
                            name="username" 
                            placeholder="Username"
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            required
                        />
                    </div>
                </div>

                <div className="form-group row"> 
                    <label 
                        for="email" 
                        class="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            required
                        />
                    </div>
                </div>
                
                <div className="form-group row"> 
                    <label 
                        for="password" 
                        class="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required
                        />
                    </div>
                </div>   
                
                <div className="form-group row"> 
                    <label 
                        for="password_confirmation" 
                        class="col-sm-2 col-form-label">
                        Password Confirmation 
                    </label>
                    <div className="col-sm-10">
                        <input 
                            type="password" 
                            name="password_confirmation" 
                            placeholder="password confirmation" 
                            value={this.state.password_confirmation} 
                            onChange={this.handleChange} 
                            required
                        />
                    </div>
                </div>
                <button typp="submit" className="btn btn-success">Rigister</button>
            </form>
        </div> 
        );
    }
}
 
export default Registration;