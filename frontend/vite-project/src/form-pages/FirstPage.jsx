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
          onChange={handleChange('input0')}
        />
        
        <button type="submit" onClick={ Continue }>Submit</button>
      </form> 
    )
}
export default FirstPage;