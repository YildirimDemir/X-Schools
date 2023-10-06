import React, { useState } from 'react'

export default function TextInput({
  placeholder,
  content,
}) {
  const [textValue, setTextValue] = useState('')

  return(
    <div className="text-input general-input">
    <span>{content}</span>
    <input 
      type="text" 
      placeholder={placeholder}
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
    >
    </input>
    </div>
  )
}
