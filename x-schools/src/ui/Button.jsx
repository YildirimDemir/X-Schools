import React from 'react'

export default function Button({
  title = 'Change This',
}) {
  return (
    <button className='general-button'>
      {title}
    </button>
  )
}
