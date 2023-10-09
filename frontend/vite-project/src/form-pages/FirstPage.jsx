import React from 'react'

const FirstPage = ({nextStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        nextStep();
    }

    return (
        <form action="">
        <input
          type="text"
          placeholder="Email Address"
          defaultValue={values.input0}
          onChange={handleChange('input0')}
        />
        
        <button type="submit" onClick={ Continue }>Next</button>
      </form> 
    )
}
export default FirstPage;