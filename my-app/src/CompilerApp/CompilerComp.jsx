import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import AccordionComp from "./Accordion";
import Navbar from "./Navbar";
import EditorAndSketch from "./EditorAndSketch";

import './css/EditorAndSketch.css'
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
const CompilerComp = () => {
    let prevCode=(localStorage.getItem("code"))?localStorage.getItem("code"):"";
    let prevLang=(localStorage.getItem("lang"))?localStorage.getItem("lang"):"cpp17";
    let [code,setCode]=useState(prevCode)
    let [Lang,setLang]=useState(prevLang)
    let [outPutResult,setResult]=useState("")
    let [inputOfCode,setInput]=useState("")

    function onChange(newValue) {
        setCode(newValue)
        console.log("change", newValue);
    }
    function submitCode(){
        console.log(Lang)
        console.log(code)
        localStorage.setItem("code",code);
        localStorage.setItem("lang",Lang)
        let data={
            code:code,
            language:Lang,
            input:inputOfCode
        }
        fetch('/compile',{
            method:"post",
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setResult(result.output)
        })
    }
    function selectedLang(e){
        setLang(e.target.value)
        
    }
    function inputCode(e){
        console.log(e.target.value);
        setInput(e.target.value)
    }
    return (
        <>
        <Navbar language={Lang} setLanguage={selectedLang}/>
        <EditorAndSketch code={code} onChange={onChange}/>
        <Button className="btn btn-success" onClick={submitCode}>Submit</Button>
        <AccordionComp inputData={inputOfCode} enteredInput={inputCode} output={outPutResult}/>
        </>
    );
}

export default CompilerComp;