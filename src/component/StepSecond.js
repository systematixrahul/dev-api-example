// Step Second
import React, { Component } from 'react';
import { throws } from 'assert';

class StepSecond extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
            <form >
            <h1 className="ui centered">Enter Personal Details</h1>
                <label>Age</label>
                <input placeholder='Age'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
                <label>City</label>
                <input placeholder='City'
                onChange={this.props.handleChange('city')}
                defaultValue={values.city}
                />
                <label>Country</label>
                <input placeholder='Country'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
            <button onClick={this.back}>Back</button>
            <button onClick={this.saveAndContinue}>Save And Continue </button>
        </form>
        )
    }
}

export default StepSecond;