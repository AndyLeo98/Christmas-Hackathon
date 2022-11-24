import React from 'react'
import './MoreCardButton.css'

const MoreCardButton = ({whenClicked}) => {
  return (
    <button onClick={() => whenClicked((prevState) => !prevState)}><i className='pi pi-list'/></button>
  )
}

export default MoreCardButton