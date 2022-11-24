import React from "react";
import './Card.css'

const Card = (props) => {





  return (
    
<div className="card" style={{backgroundImage: `url(${props.background})`}}>
  <div className="icon-wrap"><i className="pi pi-camera"/></div>
  <div className="icon-wrap"><i className="pi pi-pencil"/></div>
</div>



    
  )
};

export default Card;
