import { useState } from "react";
import PropTypes from 'prop-types';

export default function PasswordInput({
  placeholder = 'Password',
  content = '🔒',
  valueSet
}) {

  PasswordInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    valueSet: PropTypes.func.isRequired
  }

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
