import { useState } from 'react'
import './App.css'
import MoreCardButton from './components/MoreCardButton/MoreCardButton'
import CardsLibrary from './components/CardsLibrary/CardsLibrary';
import 'primeicons/primeicons.css';
 


function App() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)

  return (
    <div className='app-parent' >
  <MoreCardButton whenClicked={setIsLibraryOpen}/>
  {isLibraryOpen && <CardsLibrary/>}
    </div>
  )
}

export default App
