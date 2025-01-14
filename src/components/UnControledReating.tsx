import { useState } from "react";

type ReatingPropsType = {
    // value:number

}

export function UnControledReating (props:ReatingPropsType) {
    console.log("Reating rendering")
    
    const [value,  setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );    
}

type StarPropsType = {
    value: 1 | 2 | 3 | 4 | 5
    selected:boolean
    setValue:(value: 1 | 2 | 3 | 4 | 5)=>void
} 

function Star(props:StarPropsType) {

    return  <span onClick={()=>{props.setValue(props.value)}}>
                {props.selected ? <b> star </b> : "star "}
            </span>

}