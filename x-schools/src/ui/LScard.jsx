import React from 'react'

export default function LScard({
  title,
  desc,
}) {
  return (
    <div className="text-si">
      <h1>{title}</h1>
      <span>{desc}</span>
    </div>
  )
}
