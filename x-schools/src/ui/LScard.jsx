import PropTypes from 'prop-types';

export default function LScard({
  title,
  desc,
}) {

  LScard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }

  return (
    <div className="text-si">
      <h1>{title}</h1>
      <span>{desc}</span>
    </div>
  )
}
