import React from "react";

const VerifyPage = ({nextStep, prevStep, handleChange, submitForm, values})=>{

    const Continue = e =>{
        e.preventDefault();
        submitForm();
        nextStep();
    }

    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    return(
        <form action="">
          <h1>Do you have any final comments you'd like to include or unmentioned concerns you'd like to address?</h1>  
          <textarea rows="4" cols="50"></textarea>      
        <button type="submit" onClick={ Continue }>Continue</button>
        <button type="submit" onClick={ goBack }>Back</button>
      </form>
    )
}

export default VerifyPage