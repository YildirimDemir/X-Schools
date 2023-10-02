export default function NoteCard({
  title = 'Note',
  note = 'Desc',
}) {
  return (
    <div className="note-card">
      <h2>{title}</h2>
      <span>{note}</span>
    </div>
  )
}