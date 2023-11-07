import React from 'react'
import {Paper, Stack, Box, ToggleButtonGroup, ToggleButton, Button} from '@mui/material'

const SymptomsPage = ({nextStep, prevStep, handleChange, values}) =>{
    const Continue = e =>{
        e.preventDefault();
        console.log(values.symptoms);
        nextStep();
    }

    const goBack = e =>{
        e.preventDefault();
        prevStep();
    } 

    

    return (
        <form action="">
            <Box sx={{ width: 400}}>
                 <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                        <Button sx={{flexGrow: 1}} onClick={handleChange={'symptoms_1'}} value="Redness">Redness</Button>
                        <Button sx={{flexGrow: 1}} value="Swelling">Swelling</Button>
                        <Button sx={{flexGrow: 1}} value="Numbness">Numbness</Button>
                        <Button sx={{flexGrow: 1}} value="Bruising">Bruising</Button>
                        <Button sx={{flexGrow: 1}} value="Tingling">Tingling</Button>
                        <Button sx={{flexGrow: 1}} value="Muscle Fatigue">Muscle Fatigue</Button>
                        <Button sx={{flexGrow: 1}} value="Stiffness">Stiffness</Button>
                        <Button sx={{flexGrow: 1}} value="Joint locking">Joint locking</Button>
                </Stack>
            </Box>
            <h3></h3>
        <button type="submit" onClick={ Continue }>Continue</button>
        <button type="submit" onClick={ goBack }>Back</button>
      </form> 
    )
}
export default SymptomsPage;