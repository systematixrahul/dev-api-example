import React from 'react';
import ReactDOM from 'react-dom';
import Stepone from './StepOne';
import Stepsecond from './StepSecond'
import Confirmation from './Confirmation'




class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            city: '',
            country: '',
            selectedOption: '',
            optionsChecked: []
        };
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        event.preventDefault();
        this.setState({ [input]: event.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, age, city, country, selectedOption } = this.state;
        const values = { firstName, lastName, email, age, city, country, selectedOption };
        switch (step) {
            case 1:
                return <Stepone
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 2:
                return <Stepsecond
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 3:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
        }
    }
}

export default MainForm;
