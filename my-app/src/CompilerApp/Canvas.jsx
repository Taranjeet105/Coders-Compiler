import React, { useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Canvas = () => {
    const [zoom,zoomIn]=useState(3);
    const sketchDraw=useRef(null)
    function erase(){
      return sketchDraw.current.eraseMode(true)
    }
    function draw(){
    
      return sketchDraw.current.eraseMode(false)
    }
    function undo(){
     return sketchDraw.current.undo()
    }
    function redo(){
      return sketchDraw.current.redo()
     }
    //  function exportImg(){
    //    console.log("exporting")
    //    console.log(sketchDraw.current.exportImage('png'))
    //   sketchDraw.current.exportImage('png').then((res)=>{
    //     console.log(res)
    //     return res;
    //   }).catch((e)=>{
    //     return e;
    //   })
    //  }
     function clearAll(){
      return sketchDraw.current.resetCanvas()
     }
    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
        flexGrow:zoom.toString()
      };

  return (<>

    <ReactSketchCanvas
      style={styles}
      width="600"
      height="400"
      strokeWidth={4}
      strokeColor="red"
     ref={sketchDraw}
     onChange={()=>{console.log(sketchDraw)}}
    />
  <div style={{display:"flex", flexDirection:"column"}} className='operations'>
    <button type="button" className="btn btn-outline-primary" onClick={undo}>Undo</button>
    <button type="button" className="btn btn-outline-primary" onClick={redo}>Redo</button>
    <button type="button" className="btn btn-outline-primary" onClick={clearAll}>Clear all</button>
    <button type="button" className="btn btn-outline-primary" onClick={erase}>Erase</button>
    <button type="button" className="btn btn-outline-primary" onClick={draw}>Draw</button>
    {/* <button type="button" className="btn btn-outline-primary" onClick={exportImg}>Export image</button> */}
    <button type="button" className="btn btn-outline-primary" onClick={()=>{zoomIn(zoom+1)}}>+</button>
    
  </div>
    </>
  );
};

export default Canvas