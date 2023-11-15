import React from 'react'

const FinalQuestion = ({nextStep, prevStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
/*        console.log(values.pain_type);
        console.log(values.radio_pain_scale_active);
        console.log(values.radio_pain_scale_rest); */
        nextStep();
    }
    
    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }
    
    return (
        <form action="">
            <h1>Do you have any final comments you'd like to include or unmentioned concerns you'd like to address?</h1>  
            <input
            type="textarea"
            placeholder=""
            defaultValue={values.finalthoughts}
            onChange={handleChange('finalthoughts')}
            />
            <button type="submit" onClick={ Continue }>Next</button>        
            <button type="back" onClick={ goBack }>Back</button>        
      </form> 
    )
}
export default FirstPage;



/*
          <textarea rows="4" cols="50"></textarea>      

*/



