import React, { useState } from "react";

const ChildrenComponent = (props) =>{
    return(
        <div>
            <input 
            placeholder="Enter your name..."
            defaultValue={props.name}
            onChange={(e)=>{props.handleChange(e.target.value)}}
            />
        </div>
    )
}

export default ChildrenComponent;