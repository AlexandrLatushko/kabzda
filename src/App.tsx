import React from "react";
import "./App.css";
import { Accordion } from "./components/Accordion";
import { Reating } from "./components/Reaiting";


function App() {
  console.log("App rendering")

  return (
    <div>
      <PageTitle title={'This is App Component'}/>
      <PageTitle title={'My friends'}/>

      Article1
      <Reating value={3}/>
      <Accordion titleValue={'Menu'} collapsed={true}/> 
      <Accordion titleValue={'Users'} collapsed={false}/> 

      Article2
      <Reating value={4}/>
      <Reating value={0}/>
      <Reating value={5}/>
      <Reating value={1}/>

      <Accordion titleValue={"Home"} collapsed={true}/> 
    </div>
  )
}

type PageTitlePropsType = {
  title:string
}

function PageTitle(props:PageTitlePropsType) {
  debugger
  console.log("AppTitle rendering")

  return(
    <h1>{props.title}</h1>
  )
}



export default App;
