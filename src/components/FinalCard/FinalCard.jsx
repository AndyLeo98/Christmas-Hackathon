import React from 'react'
import './FinalCard.css'

const FinalCard = (props) => {
  return (
    <div className="card" style={{backgroundImage: `url(${props.obj.background})`}}>
  <div className="icon-wrap"><img src={props.obj.photo} alt="charactar" /></div>
  <div className="icon-wrap">{props.obj.text}</div>
</div>
  )
}

export default FinalCard