
type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
}

export function Accordion(props:AccordionPropsType) {
    console.log("Accordion rendering");

    if(props.collapsed === true){
        return (
            <div>
                <AccordionTitle  title={props.titleValue} />
                <AccordionBode />
            </div>
        );
    }else{
        return (
            <div>
                <AccordionTitle  title={props.titleValue} />
            </div>
        );
    }
    
}

type AccordionTitlePropsType = {
    title:string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitl e rendering");

    return <h3>{props.title}</h3>;
}

function AccordionBode() {
    console.log("AccordionBode rendering");

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
