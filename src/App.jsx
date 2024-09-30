import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import over from "/normal.png?urlover.png"
import double from "/normal.png?urldouble-over.png"
import normal from "/normal.png?urlnormal.png"
import obese from "/normal.png?urlobese.png"
import under from "/normal.png?urlunderWeight.png"

import './App.css'

function App() {

  let [valueWeight, setValueWeight] = React.useState("")
  let [valueHeight, setValueHeight] = React.useState("")
  let [src, setSrc] = React.useState("https://stone-horn-a78.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F989539c7-7a6d-4611-9778-eb2623dec992%2Fe37c1861-3f60-4243-9d94-e484335b53a0%2FUntitled.png?table=block&id=05533b4d-2bd3-41db-8319-0182d4bae7be&spaceId=989539c7-7a6d-4611-9778-eb2623dec992&width=1920&userId=&cache=v2")
  let [bmi,setBmi] = React.useState(0)
  let [wide,setWide] = React.useState(true)
  let [mess,setMess] = React.useState("")
  function handleWeightChange(event) {
    setValueWeight(event.target.value)
  }

  function handleHeightChange(event) {
    setValueHeight(event.target.value)
  }
function onSubmit(){
  let bmi = parseInt(valueWeight)/(parseInt(valueHeight)*parseInt(valueHeight))
  setBmi(parseInt(bmi))
  setWide(false)
  if(bmi <18.5)  {setMess("underWeight"); return setSrc(under);}
  if(bmi <=24.9) {setMess("Normal"); return setSrc(normal);}
  if(bmi <=29.9) {setMess("Increased Weight"); return setSrc(over);}
  if(bmi <=34.9) {setMess("Obese"); return setSrc(double);}
  setMess("Exremly Obese"); 

  return setSrc(obese)



  
}
  return (
    <>
      <div className=' flex flex-col justify-center items-center'>
      <img src={src} alt="" className= {wide? 'w-[80%] max-w-[40em] p-2':'max-w-[10em] p-2'} />
        <div className='flex flex-col items-center space-y-2 '>

          <div className='max-sm:grid flex'>
            <label htmlFor="">Enter your Weight: </label>
            <input onChange={handleWeightChange} value={valueWeight} type="text" placeholder='0' className='bg-gray-400 border-[1px] border-b-gray-800 text-black ' />

          </div>

          <div className='max-sm:grid flex'>
            <label htmlFor="">Enter your height: </label>
            <input onChange={handleHeightChange} value={valueHeight} type="text" placeholder='0' className='bg-gray-400 border-[1px] border-b-gray-800 text-black ' />

          </div>
          <button onClick={onSubmit} className=' self-end text-white font-bold p-2 text-1xl bg-green-500 border-[1px] border-green-900'>Check BMI</button>
        </div>

        <div className='font-bold text-2xl'><span className='text-lg font-bold'>{mess? mess : ""}</span> / Bmi: {bmi} </div>
      </div>

    </>
  )
}

export default App
