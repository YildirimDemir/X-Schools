import { useState } from "react";


export default function PasswordInput({
  placeholder = 'Password',
  content = '🔒',
  valueSet
}) {
  const [showPass, setShowPass] = useState(false)

  const showPassHandler = () => {
    setShowPass((s) => !s)
  }

  return (
    <div className="pass-input general-input">
      <span>{content}</span>
      <input
        type={showPass ? 'text' : 'password'}
        placeholder={placeholder}
        onChange={(e) => valueSet(e.target.value)}
      />
      <button onClick={() => showPassHandler()}>
        {showPass ? '🐵' : '🙈'}
      </button>
    </div>
  )
}
