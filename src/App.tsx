
import Button from "./components/Button/Button.tsx";
import {useState} from "react";
import {MouseEvent} from "react";
import Input from "./components/Input/Input.tsx";





function App() {
    const addCounter = (e: MouseEvent)=>{
        console.log(e)
    }
  return (
    <>
        <Button onClick={(e)=>addCounter(e)}>Кнопка</Button>
        <Button appearance={"big"} onClick={(e)=>addCounter(e)}>Кнопка</Button>
        <Input placeholder='email'/>
    </>
  )
}

export default App
