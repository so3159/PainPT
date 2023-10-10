import React from "react";

const ResPage = ({response, prevStep}) =>{
    const goBack = e =>{
        e.preventDefault();
        prevStep();
    }

    console.log(response)

    return(
        <>
        <p> {response} </p>
        <form>
            <button type="submit" onClick={ goBack }>Back</button>
        </form>
        </>
    )
}

export default ResPage;