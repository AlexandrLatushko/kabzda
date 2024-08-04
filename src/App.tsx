import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { RatingValueType, Reating} from "./components/raaiting/Reaiting";
import { OnnOff } from "./components/OnnOff";
import { UnControlledAccordion } from "./components/UnControlledAccordion";
import { UnControledReating } from "./components/UnControledReating";
import { Select } from "./components/select/Select";


function App() {
  console.log("App rendering")


  const [ratinfValue, setRatinfValue] = useState<RatingValueType>(0)
  const [accordionCollapset, setAccordionCollapset] = useState(false)

  return (
    <div className={"App"}>
    <Select value={1} onChange={()=>{}} items={[]} />

    <Reating value={ratinfValue} onClick={setRatinfValue}/>
    <Accordion  titleValue={'Menu'} 
                collapsed={accordionCollapset} 
                onChange={()=>{setAccordionCollapset(!accordionCollapset)}}/>
{/* 
      <OnnOff/>
      <UnControlledAccordion titleValue={'Menu'}/>
      <UnControledReating /> */}
 
      {/* <OnnOff on={true}/>
      <OnnOff on={false}/>
      <OnnOff on={false}/> */}


      {/* <PageTitle title={'This is App Component'}/>
      <PageTitle title={'My friends'}/>

      Article1
      <Accordion titleValue={'Menu'} collapsed={true}/> 
      <Accordion titleValue={'Users'} collapsed={false}/> 

      Article2
      <Reating value={0}/>
      <Reating value={1}/>
      <Reating value={2}/>
      <Reating value={3}/>
      <Reating value={4}/>
      <Reating value={5}/>

      <Accordion titleValue={"Home"} collapsed={true}/>  */}
    </div>
  )
}

type PageTitlePropsType = {
  title:string
}

function PageTitle(props:PageTitlePropsType) {
  console.log("AppTitle rendering")

  return(
    <h1>{props.title}</h1>
  )
}



export default App;
