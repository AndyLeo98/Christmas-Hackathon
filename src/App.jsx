import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Camera from './components/Camera/Camera'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <h4>Xmas Hackaton</h4>
  <Camera/>
    </div>
  )
}

export default App
