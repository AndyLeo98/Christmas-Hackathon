import { useState } from 'react'
import './App.css'
import MoreCardButton from './components/MoreCardButton/MoreCardButton'
import CardsLibrary from './components/CardsLibrary/CardsLibrary';
import 'primeicons/primeicons.css';
import MessageSection from './components/MessageSection/MessageSection'


function App() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)

  return (
    <div className='app-parent' >
  <MoreCardButton whenClicked={setIsLibraryOpen}/>
  {isLibraryOpen && <CardsLibrary/>}
  <MessageSection/>
    </div>

  )
}

export default App
