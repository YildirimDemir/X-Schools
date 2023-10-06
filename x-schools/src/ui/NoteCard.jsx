import PropTypes from 'prop-types';

export default function NoteCard({
  title = 'Note',
  note = 'Desc',
}) {

  NoteCard.propTypes = {
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  }

  return (
    <div className="note-card">
      <h2>{title}</h2>
      <span>{note}</span>
    </div>
  )
}