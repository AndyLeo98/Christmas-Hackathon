import React from 'react'
import './MessageSection.css'

const MessageSection = ({text}) => {
  return (
    <div className='section-wrap'>
      <textarea onChange={(e) => text(e.target.value)}></textarea>
    </div>
  )
}

export default MessageSection