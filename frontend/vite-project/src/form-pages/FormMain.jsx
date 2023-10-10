import React, { Component } from 'react';
import { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ResPage from './ResPage'


export default class FormMain extends Component{
    state = {
        step: 0,
        input0: '',
        input1: '',
        message: ''
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({step: step - 1});
    }

    nextStep = () =>{
        const {step, input0} = this.state;
        console.log(this.state);
        this.setState({step: step + 1});
    }
    
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }

    submitForm = async () =>{
        const state = this.state;
        //console.log(input0);
        fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              state
            }),
          })
            .then((response) => response.json()) //this part is for response from api
            .then((data) =>{
                this.setState({message: data.hello})
            })
            .catch((error) => {
              console.log(error);
            });
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
                        values={values}
                    />
                )
            case 1:
                return(
                <SecondPage 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    submitForm={this.submitForm}
                    values={values}
                />)
            default:
                return(<ResPage 
                    response={ this.state.message } 
                    prevStep={this.prevStep}                    
                />)
        }

    }
}