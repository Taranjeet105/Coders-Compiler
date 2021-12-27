import React, { useState } from "react";
import AceEditor from "react-ace";
import Canvas from "./Canvas";
const EditorAndSketch=(props)=>{
    const {onChange,code}=props;
    const [zoom,zoomIn]=useState(2)
    return(<>
         <div id="editor_and_sketch">
        <AceEditor style={{flexGrow:zoom.toString(),height:"80vh"}}
                placeholder="Placeholder Text"
                mode="python"
                theme="monokai"
                name="blah2"
                onChange={onChange}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }} />
        <button onClick={()=>{
            zoomIn(zoom+1)
        }}>+</button>
        <Canvas/>
        {/* <Sketch /> */}
        </div>
    </>)
}

export default EditorAndSketch;