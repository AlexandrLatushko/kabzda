import { useState } from "react";

type AccordionPropsType = {
    titleValue:string
    // collapsed:boolean
}

export function UnControlledAccordion(props:AccordionPropsType) {


    const [collapsed, setCollapsed] = useState(false)

    const toggleAccordion = () => {
        setCollapsed(!collapsed);
    };
    
        return (
            <div>
                <AccordionTitle  title={props.titleValue} onClick={toggleAccordion}/> 
                {!collapsed && <AccordionBode/>}
            </div>
        );
    
}

type AccordionTitlePropsType = {
    title:string
    onClick:()=>void
}

function AccordionTitle(props:AccordionTitlePropsType) {

    return <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>;
}

function AccordionBode() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
