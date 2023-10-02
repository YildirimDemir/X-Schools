import React from 'react'

export default function Button({
  title = 'Try',
  color = 'white', 
  bgcolor = 'gray',
}) {

  const buttonStyle = {
    backgroundColor: bgcolor,
    color: color,
    padding: '5px',
    width: '80px',
    border: 'transparent',
    borderRadius: '5px',
    boxShadow: 'inset 3px -3px 11px #bdbdbd',
  }

  return (
    <button style={buttonStyle} className='general-button'>
      {title}
    </button>
  )
}
