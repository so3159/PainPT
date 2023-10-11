import React from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

const PainScaleActive = ({nextStep, prevStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        console.log(values.radio);
        nextStep();
    }

    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    return (
        <form action="">
            <h4>Rate your pain level when Active</h4>
            <RadioGroup row onChange={handleChange('radio')} value={values.radio}>
                <p>(Least)</p>
                <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="1" /> 
                <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="2" /> 
                <FormControlLabel labelPlacement='top' value="3" control={<Radio />} label="3" /> 
                <FormControlLabel labelPlacement='top' value="4" control={<Radio />} label="4" /> 
                <FormControlLabel labelPlacement='top' value="5" control={<Radio />} label="5" /> 
                <FormControlLabel labelPlacement='top' value="6" control={<Radio />} label="6" /> 
                <FormControlLabel labelPlacement='top' value="7" control={<Radio />} label="7" /> 
                <FormControlLabel labelPlacement='top' value="8" control={<Radio />} label="8" /> 
                <FormControlLabel labelPlacement='top' value="9" control={<Radio />} label="9" /> 
                <FormControlLabel labelPlacement='top' value="10" control={<Radio />} label="10" />
                <p>(Most)</p>
                </RadioGroup>
            <h4>Rate your Pain Level when Resting</h4>
                <RadioGroup row onChange={handleChange('radio1')} value={values.radio1}>
                <p>(Least)</p>
                <FormControlLabel labelPlacement='top' value="1" control={<Radio />} label="1" /> 
                <FormControlLabel labelPlacement='top' value="2" control={<Radio />} label="2" /> 
                <FormControlLabel labelPlacement='top' value="3" control={<Radio />} label="3" /> 
                <FormControlLabel labelPlacement='top' value="4" control={<Radio />} label="4" /> 
                <FormControlLabel labelPlacement='top' value="5" control={<Radio />} label="5" /> 
                <FormControlLabel labelPlacement='top' value="6" control={<Radio />} label="6" /> 
                <FormControlLabel labelPlacement='top' value="7" control={<Radio />} label="7" /> 
                <FormControlLabel labelPlacement='top' value="8" control={<Radio />} label="8" /> 
                <FormControlLabel labelPlacement='top' value="9" control={<Radio />} label="9" /> 
                <FormControlLabel labelPlacement='top' value="10" control={<Radio />} label="10" /> 
                <p>(Most)</p>
            </RadioGroup>
  
        <button type="submit" onClick={ Continue }>Next</button>
        <button type="submit" onClick={ goBack }>Back</button>
      </form> 
    )
}
export default PainScaleActive;