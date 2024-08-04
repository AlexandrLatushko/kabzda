import { useState } from "react";

type PropsType = {
    // on:boolean
};




export const OnnOff = (props: PropsType) => {


    const [on, setOn] = useState(false)

    let onStyle = {
        width: "30px",
        height:"15px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:" 5px",
        padding:"5px",
        backgroundColor: on ? "green" : "white",
        
    }
    let offStyle = {
        width: "30px",
        height:"15px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:" 5px",
        padding:"5px",
        backgroundColor: on ? "white" : "red"

    }
    let indicatorStyle = {
        width: "10px",
        height:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:" 5px",
        backgroundColor:on ? "green" : "red"

    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle} onClick={()=>{}}></div>
        </div>
    );
};