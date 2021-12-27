import React from "react";

const Input=(props)=>{
   const {inputData,enteredInput}=props
    return(
        <>
            <div className="form-floating">
            <h5>Input</h5>
                <textarea className="form-control" placeholder="Leave a comment here" id="input" onChange={enteredInput} value={inputData}></textarea>
            </div>
        </>
    )
}

export default Input