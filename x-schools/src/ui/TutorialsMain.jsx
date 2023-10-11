import PropTypes from 'prop-types';

export default function TutorialsMain({ title }) {

  TutorialsMain.propTypes = {
    title: PropTypes.string.isRequired
  }

  return (
    <div className='tutorials-main'>
      <h1>Let&apos;s learn {title}</h1>
    </div>
  )
}