import React from "react";

const SecondPage = ({nextStep, prevStep, handleChange, submitForm, values})=>{

    const Continue = e =>{
        e.preventDefault();
        console.log("submit");
        submitForm();
        nextStep();
    }

    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    return(
        <form action="">
        <input
          type="text"
          placeholder="next"
          onChange={handleChange('input1')}
        />
        
        <button type="submit" onClick={ Continue }>Submit</button>
        <button type="submit" onClick={ goBack }>Back</button>
      </form>
    )
}

export default SecondPage