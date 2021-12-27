import React ,{useState} from "react";
import OutPut from "./OutPut";
import Input from "./Input";
import "./css/Accordion.css"
const AccordionComp=(props)=>{
    const [isActive, setIsActive] = useState(false);
    const {inputData,enteredInput,output}=props
    return (
        <>
         <div className="accordion">
  <div className="accordion-item">
    <div
      className="accordion-title"
      onClick={() => setIsActive(!isActive)}
    >
      <div> <b>Console</b>  <span>{isActive ? <b>-</b> : <b>+</b>}</span></div>
      
    </div>
    {isActive && <div className="accordion-content"><Input inputData={inputData} enteredInput={enteredInput} /><OutPut output={output}/></div>}
  </div>
</div>
        </>
      );
}

export default AccordionComp