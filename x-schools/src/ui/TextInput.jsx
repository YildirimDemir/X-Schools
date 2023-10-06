import PropTypes from 'prop-types';

export default function TextInput({
  placeholder,
  content,
  valueSet
}) {

  TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    valueSet: PropTypes.func.isRequired
  }

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
