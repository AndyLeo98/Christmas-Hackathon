import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MessageSection from './components/MessageSection/MessageSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h4>Xmas Hackaton</h4>
  <MessageSection/>
    </>
  )
}

export default App
