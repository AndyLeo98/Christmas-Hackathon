import React, {useCallback, useRef, useState} from 'react'
import Webcam from "react-webcam";


const Camera = ({whenClick, photo}) => {
  
    const [image,setImage]=useState('');
    let webcamRef = useRef(null);
    const videoConstraints = {
      width: 420,
      height: 420,
      facingMode: "user",
    };
  
    const capture = React.useCallback(

      async () => {
      
      const imageSrc = webcamRef.current.getScreenshot();
      
      await setImage(imageSrc)
      amIHappy();
      });

      const amIHappy = () => {
        const response = confirm("Happy with your look?")
        if (response === true) {
          alert('Yay')
        } else {
          location.reload();
        }
      }

      const clickHandler = () => {
        capture();
        whenClick(() => true);
        
      }
      
      {image !== '' & photo(image)}
  return (
    <>
    <Webcam/>
    <button onClick={clickHandler}>Take picture</button>
    <div className="webcam-img">

{image==''?<Webcam

audio={false}

height={200}

ref={webcamRef}

screenshotFormat="image/jpeg"

 width={220}

videoConstraints={videoConstraints}

/>:<img src={image}/>}
</div>
    </>
  )
}

export default Camera