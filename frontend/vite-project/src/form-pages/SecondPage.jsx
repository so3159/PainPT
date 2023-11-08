import React from "react";

const SecondPage = ({nextStep, prevStep, handleChange, submitForm, values})=>{

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
        <input
          type="text"
          placeholder="next"
          defaultValue={values.input1}
          onChange={handleChange('input1')}
        />
        
        <button type="submit" onClick={ Continue }>Continue</button>
        <button type="submit" onClick={ goBack }>Back</button>
      </form>
    )
}

export default SecondPage