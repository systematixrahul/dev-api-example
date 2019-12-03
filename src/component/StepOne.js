// stepone
import React, { Component } from 'react';
import axios from 'axios';

class StepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            userDetail: []
        };
    }

    componentWillMount() {
        axios.get(`http://5d6f9c56482b530014d2e551.mockapi.io/users`)
            .then(res => {
                const persons = res.data;
                //persons.splice(5, 3);
                console.log("Rahul Shivansh", res.data, persons);
                this.setState({ persons });
            })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                res=> {
                    const userDetail = res.data;
                    console.log("Sashwat Rahul", res.data);
                    this.setState({ userDetail });
                }
            )
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep();
    }
    render() {
        const { values } = this.props;
        const { userDetail } = "";
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
                    {this.state.persons.map(person => <li key={person.id}>{person.values && person.values.firstName}</li>)}
                </ul>
                <br /><br />
                <ul>
                    <li>
                        <select name="plan" id="user-detail list">
                            <option value="All">All</option>
                            <option value="userone">User One</option>
                            <option value="usertwo">User Two</option>
                            <option value="userthree">User Three</option>
                        </select>
                        
                    </li>
                    <li>{userDetail}</li>
                </ul>
            </div>
        )
    }
}

export default StepOne;