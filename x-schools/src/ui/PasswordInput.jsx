import { useState } from "react";


export default function PasswordInput({
  placeholder = 'Password',
  content = '🔒'
}) {
  const [showPass, setShowPass] = useState(false)
  const [passValue, setPassValue] = useState('')

  const showPassHandler = () => {
    setShowPass((s) => !s)
  }

  return(
    <div className="pass-input general-input">
    <span>{content}</span>
    <input 
      type={showPass ? 'text' : 'password'} 
      placeholder={placeholder} 
      value={passValue}
      onChange={(e) => setPassValue(e.target.value)}
    />
    <button onClick={() => showPassHandler()}>
      {showPass ? '🐵' : '🙈'}
    </button>
    </div>
  )
}
