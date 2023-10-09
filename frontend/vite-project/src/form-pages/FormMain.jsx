import React, { Component } from 'react';
import FirstPage from './FirstPage';


export default class FormMain extends Component{
    state = {
        step: 0,
        input0: '',
        input1: '',
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({step: step - 1});
    }

    nextStep = () =>{
        const {step, input0} = this.state;
        console.log(input0);
        this.setState({step: step + 1});
    }
    
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }

    render(){
        const { step } = this.state;
        const {input0, input1} = this.state;
        const values = {input0, input1}

        switch(step){
            case 0:
                return(
                     <FirstPage 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={this.values}
                    />
                )
            case 1:
                return(<h2>no second page</h2>)
            default:
                return(<h2>hi</h2>)
        }

    }
}