// import React from 'react'
import React, { useState } from 'react';

export default function TextForm(props) {
    // declare a new state variable
    const [text, setText] = useState("Feed me text");
    // text = "new Text" //Wrong way to change the state
    //Correct way to change the state variable 

    const handleOnClick = ()=>{
        console.log("This button was clicked\n");
        setText(text.toUpperCase());
    }

    const handleOnChange = (event)=>{
        console.log("On Change\n");
        setText(event.target.value);
    }

    return (
        <div className="container">
            <h1 className = "text-center">{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} id="exampleFormControlTextarea1" onChange = {handleOnChange} rows="8"></textarea>
            </div>
            <button className="text-center btn btn-primary " onClick = {handleOnClick}>Convert to Uppercase</button>
        </div>
    );


}