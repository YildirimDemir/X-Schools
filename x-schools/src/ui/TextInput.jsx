import React, { useState } from 'react'

export default function TextInput({
  placeholder,
  content,
  valueSet
}) {

  return (
    <div className="text-input general-input">
      <span>{content}</span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => valueSet(e.target.value)}
      >
      </input>
    </div>
  )
}
