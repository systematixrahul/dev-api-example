import React, { Component } from 'react';
import axios from 'axios';
class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();

        const { values } = this.props;  

        axios.post(`http://5d6f9c56482b530014d2e551.mockapi.io/users`, { values })
        .then(res => {
          console.log("Rahul Sashwat",res.data);
        });
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    componentWillMount() {
        axios.get(`http://5d6f9c56482b530014d2e551.mockapi.io/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
      }
    

    render(){
        const {values: { firstName, lastName, email, age, city, country,selectedOption }} = this.props;
        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                
                        First Name: {firstName}
                        Last Name: {lastName}                       
                        <a href='mailto:jack@semantic-ui.com'>{email}</a>
                        {age} Years
                        {city}, {country},
                        Radio:{selectedOption}

                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Confirm</button>

              
            </div>
        )
    }
}

export default Confirmation;