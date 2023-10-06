import React from 'react'

export default function Button({
  title = 'Change This',
  type
}) {
  return (
    <button type={type} className='general-button'>
      {title}
    </button>
  )
}
