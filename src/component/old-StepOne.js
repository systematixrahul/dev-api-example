// stepone
import React, { Component } from 'react';
import axios from 'axios';

class StepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
      }
    
    componentDidMount() {
        axios.get(`http://5d6f9c56482b530014d2e551.mockapi.io/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                console.log("Rahul Shivansh", res.data);
            })
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep();
    }
    render() {
        console.log('test', this.state.persons)
        const { values } = this.props;
        return (
            <div>
                <form >
                    <h1 className="ui centered">Enter User Details</h1>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}
                    />

                    <label>Email Address</label>
                    <input
                        type='email'
                        placeholder='Email Address'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                    <label>Radio</label>
                    <input type="radio"
                        value="Yes"
                        checked={this.props.selectedOption}
                        onChange={this.props.handleChange('selectedOption')} />Yes
                    <input type="radio"
                        value="No"
                        checked={this.props.selectedOption}
                        onChange={this.props.handleChange('selectedOption')} />No
               <input type="checkbox" id={this.props.id} value={this.props.value} onChange={this.props.onChange} />
                    <button onClick={this.saveAndContinue}>Save And Continue </button>
                </form>

                <ul>
                    {this.state.persons.map(person => <li key={person}>{person.values.firstName}</li>)}
                </ul>
            </div>
        )
    }
}

export default StepOne;