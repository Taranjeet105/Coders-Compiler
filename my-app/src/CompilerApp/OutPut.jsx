import React from "react";

const OutPut=(props)=>{
    const {output}=props
    return(
        <>
            <div className="form-floating">
            <h5>Output</h5>
                <textarea className="form-control" placeholder="Leave a comment here" id="output" onChange={()=>{}} value={output}></textarea>
            </div>
        </>
    )
}

export default OutPut