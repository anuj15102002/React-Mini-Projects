import React, { useCallback, useEffect, useState } from "react"
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed)str += "1234567890"
    if(characterAllowed)str += "~!@#$%^&*`[]()"

    for(let i=0;i<=length;i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  },
   [length, characterAllowed, numberAllowed, setPassword])
   
   useEffect(() => {
    passwordGenerator()
   }, [length, numberAllowed, characterAllowed, passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shodow-md rounded-lg px-4 py-3 my-9 text-orange-500 bg-gray-700'>
      <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50">
          <input 
          type="text"
          className="outline-none w-full py-2 px-3"
          value={password}
          placeholder="Password"
          readonly
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy</button>
          
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex item-center gap-x-1">
              <input 
              type="range"
              value={length}
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
              
              />
              <label>Lengh: {length}</label>

            </div>

            <div classname="flex items-center gapx-x-1">
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput"> Numbers</label>
            </div>
           
            <div classname="flex items-center gapx-x-1">
              <input type="checkbox"
              defaultChecked={characterAllowed}
              id="CharacterInput"
              onChange={() => setCharacterAllowed((prev) => !prev)}
              />
              <label htmlFor="CharacterInput"> Characters</label>
            </div>
          

        </div>
      </div>
    </>
  )
}

export default App
