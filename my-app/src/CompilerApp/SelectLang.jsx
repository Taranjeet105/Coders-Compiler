import React from "react";
import "./css/selectLang.css"
const SelectLang=(props)=>{
    const {language,setLanguage}=props
    return(<>
        <select id="languages" value={language} onChange={setLanguage} className="form-select" aria-label="Default select example">
        <option value="">Select language</option>
        <option value="cpp17">C++</option>
        <option value="python3">Python</option>
        <option value="java">Java</option>
</select>
    </>)
}
export default SelectLang