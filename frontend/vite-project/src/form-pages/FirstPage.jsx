import React from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

const FirstPage = ({nextStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        console.log(values.radio);
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

        <RadioGroup row onChange={handleChange('radio')} value={values.radio}>
          <FormControlLabel labelPlacement='top' value="0" control={<Radio />} label="0" /> 
          <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="1" /> 
          <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="2" /> 
        </RadioGroup>
  
        <button type="submit" onClick={ Continue }>Next</button>
      </form> 
    )
}
export default FirstPage;