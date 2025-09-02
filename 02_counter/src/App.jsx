import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 5

  let [counter, setCounter] = useState(0)

  const addvalue = () => {

    if(counter>=20) {
      counter = counter + 0
    } else {
      counter = counter + 1
    }
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter <= 0) {
      counter = counter - 0
    } else {
      counter = counter - 1
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>I am DELTA</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}> Add value </button>
      <br />
      <button onClick={removeValue}> Remove value </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
