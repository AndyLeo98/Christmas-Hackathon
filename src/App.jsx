import { useState } from 'react'
import './App.css'
import Camera from './components/Camera/Camera'
import MoreCardButton from './components/MoreCardButton/MoreCardButton'
import CardsLibrary from './components/CardsLibrary/CardsLibrary';
import 'primeicons/primeicons.css';
import MessageSection from './components/MessageSection/MessageSection'
import Snowfall from 'react-snowfall'
import FinalCard from './components/FinalCard/FinalCard';


function App() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)
  const [textValue, setTextValue] = useState(null)
  const [photoValue, setphotoValue] = useState(null)
  const [chooseBackground, setChooeseBackground] = useState(null)
  const [isCompleted, setIsCompleted] = useState(null)

const processImg = () => {
  if(photoValue !== null) {
    const processed = photoValue.split(",");
    console.log(processed[1]);

  }
}

  processImg();

  console.log(textValue)
  console.log(photoValue)
  console.log(isCompleted)
  console.log(chooseBackground)

  return (

    <div className='app-parent' >
      <Snowfall/>
      <div className='app-left-side'>
  <MoreCardButton whenClicked={setIsLibraryOpen}/>
  {isLibraryOpen && <CardsLibrary choose={setChooeseBackground}/>}

      </div>
      <div className='app-right-side'>
  <Camera photo={setphotoValue} whenClick={setIsCompleted}/>
  <MessageSection text={setTextValue}/>

      </div>
      {isCompleted && <FinalCard obj={{background: chooseBackground, photo: photoValue, text: textValue}}/>}
    </div>

    

  )
}

export default App
