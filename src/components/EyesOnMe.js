// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handleEvent(event){
        if(event.type === "blur"){
            console.log("Hey! Eyes on me!")
        }
        else if (event.type === "focus"){
            console.log("Good!")
        }
    }
    return (
        <button  onBlur={handleEvent} onFocus={handleEvent}>
          Eyes on me
        </button>
      );
    }
    
    export default EyesOnMe;
