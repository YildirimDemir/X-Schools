import PropTypes from 'prop-types';

export default function Button({
  title = 'Change This',
  type
}) {

  Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  return (
    <button type={type} className='general-button'>
      {title}
    </button>
  )
}
